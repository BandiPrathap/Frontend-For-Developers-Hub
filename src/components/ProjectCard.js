//component/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project, onApply }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Budget: {project.budget}</p>
      <p>Required Skills: {project.skillsRequired.join(', ')}</p>
      {/* Conditionally display Apply button for freelancers */}
      {onApply && (
        <button onClick={onApply}>Apply for Project</button>
      )}
    </div>
  );
};

export default ProjectCard;

