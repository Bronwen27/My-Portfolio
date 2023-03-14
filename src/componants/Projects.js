import React from 'react';
import Project from './ProjectPage';
import projectData from './projectData.json';

const Projects = () => {
  return (
    <div>
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;