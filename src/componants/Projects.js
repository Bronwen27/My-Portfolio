import React from 'react';
import ProjectPage from './ProjectPage';
import projectData from './projectData.json';

const Projects = () => {
  return (
    <div>
      {projectData.map((project) => (
        <ProjectPage key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;