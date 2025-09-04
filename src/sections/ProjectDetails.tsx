import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectDetails } from './Projects';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectDetails.find(p => p.id === parseInt(projectId || '1'));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <section className="min-h-[calc(100vh-4rem)] py-10" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
      <div className="px-15">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-2">
            <button onClick={handleBackToProjects} className="mb-6">
              <Button className="bg-gray-600 hover:bg-gray-700">
                Back to Projects
              </Button>
            </button>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <ImageCarousel 
              images={project.images} 
              title={project.title}
            />
          </div>

          <div className="text-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 px-5 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {project.title}
              </h1>
          </div>

          {/* Project Overview */}
          <div className="bg-gray-800 rounded-lg p-6 mt-8 transition-transform duration-300 hover:scale-105 gradient-border-cyan-pink">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Project Overview</h2>
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <p className="space-y-2">
              {project.overview.map((overviewItem, index) => (
                <span className="text-gray-300">{overviewItem}</span>
              ))}
            </p>
          </div>

          {/* Technologies */}
          <div className="bg-gray-800 rounded-lg p-6 mt-8 transition-transform duration-300 hover:scale-105 gradient-border-red-yellow">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-gray-800 rounded-lg p-6 mt-8 transition-transform duration-300 hover:scale-105 gradient-border-cyan-blue">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
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
            <div className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 hover:scale-105 gradient-border-pink">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 hover:scale-105 gradient-border-green-blue">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Solutions</h2>
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
