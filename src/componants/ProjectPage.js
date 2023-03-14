import React from 'react';
import { Link } from 'react-router-dom';
import projectData from './projectData.json';

const ProjectPage = ({ project }) => {
  const { id, title, deployedLink, githubLink, image } = project;

  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/projects/${id}`}>
        <img src={image} alt={`${title} screenshot`} />
      </Link>
      <p>Deployed version: <a href={deployedLink}>{deployedLink}</a></p>
      <p>GitHub repository: <a href={githubLink}>{githubLink}</a></p>
    </div>
  );
};

export default ProjectPage;
