import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:5000/projects',
          headers: {}
        };
        
        const response = await axios.request(config);
        setProjects(response.data); // Assuming response.data is an array of projects
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>Budget: {project.budget}</p>
          {/* Check if skillsRequired exists before accessing and joining */}
          {project.skillsRequired && (
            <p>Skills Required: {project.skillsRequired.join(', ')}</p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
