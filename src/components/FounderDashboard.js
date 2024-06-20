//component/FounderDashboard.js
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
// Import additional components like CreateProjectForm and Chat

const FounderDashboard = () => {
  const [projects, setProjects] = useState([]); // Array to store projects

  // Fetch founder's projects from backend API
  useEffect(() => {
    const fetchProjects = async () => {
      // Simulate API call
      const response = await fetch('/api/projects/founder');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Function to handle creating a new project (replace with actual form submission logic)
  const handleCreateProject = async (projectData) => {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData),
    });
    const newProject = await response.json();
    setProjects([...projects, newProject]); // Update project list
  };

  return (
    <div>
      <h2>Founder Dashboard</h2>
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>
      {/* Button to trigger CreateProjectForm component */}
      <button onClick={() => { /* Open CreateProjectForm component */ }}>Create Project</button>
      {/* Chat functionality component (replace with Chat component) */}
      <Chat />
    </div>
  );
};

export default FounderDashboard;

