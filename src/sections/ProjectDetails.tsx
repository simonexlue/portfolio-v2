import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectDetails } from './Projects';
import Button from '../components/Button';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectDetails.find(p => p.id === parseInt(projectId || '1'));

  const handleBackToProjects = () => {
    navigate('/');
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <section className="min-h-[calc(100vh-4rem)] py-20" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
        <div className="px-15">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 gradient-text">
              Project Not Found
            </h1>
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-300 text-lg mb-6">
                The project you're looking for doesn't exist.
              </p>
              <button onClick={handleBackToProjects}>
                <Button>Back to Projects</Button>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] py-20" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
      <div className="px-15">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <button onClick={handleBackToProjects} className="inline-block mb-8">
              <Button className="bg-gray-600 hover:bg-gray-700">
                ← Back to Projects
              </Button>
            </button>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-4">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technologies */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Repository</h2>
              <Button 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700"
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gray-800 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Solutions</h2>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
