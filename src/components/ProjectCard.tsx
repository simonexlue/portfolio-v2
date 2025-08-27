import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  repoLink?: string;
  gradientClass?: string;
  projectId: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, repoLink, gradientClass, projectId }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-[550px] transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="h-80 w-full object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-semibold mb-2 ${gradientClass || ''}`}>{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
        <div className="mt-4 flex space-x-4">
            <Link to={`/project-details/${projectId}`}>
              <Button className="text-sm">
                Details
              </Button>
            </Link>
            {repoLink && (
              <Button href={repoLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-gray-600 hover:bg-gray-700">
                GitHub Repo
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;