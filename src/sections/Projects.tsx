import ProjectCard from '../components/ProjectCard';
import placeholder from '../assets/my-photo.jpg';

// Export project details for use in ProjectDetails component
export const projectDetails = [
  {
    id: 1,
    title: 'WayPoint',
    description: "A mobile travel-planning app built with React Native, FastAPI, and PostgreSQL that delivers personalized recommendations based on a user's travel style. It features a travel style quiz, interactive map with Google Places integration, real-time collaborative itinerary planning, gamified achievements, and an AI-powered chatbot assistant.",
    image: placeholder,
    repoLink: '#',
    technologies: ['React Native', 'FastAPI', 'PostgreSQL', 'Google Places API', 'AI/ML'],
    features: [
      'Travel style quiz for personalized recommendations',
      'Interactive map with Google Places integration',
      'Real-time collaborative itinerary planning',
      'Gamified achievements system',
      'AI-powered chatbot assistant',
      'Cross-platform mobile app'
    ],
    challenges: [
      'Implementing real-time collaboration features',
      'Integrating multiple third-party APIs',
      'Optimizing mobile performance',
      'Designing intuitive user experience'
    ],
    solutions: [
      'Used WebSocket connections for real-time updates',
      'Implemented robust error handling for API integrations',
      'Optimized database queries and caching strategies',
      'Conducted extensive user testing and iteration'
    ]
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'Another project demonstrating ability to build features using various technologies.',
    image: placeholder,
    repoLink: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'User authentication and authorization',
      'Real-time data processing',
      'Responsive web design',
      'API integration',
      'Database management'
    ],
    challenges: [
      'Scalable architecture design',
      'Performance optimization',
      'Security implementation'
    ],
    solutions: [
      'Implemented microservices architecture',
      'Used Redis for caching and session management',
      'Applied OAuth 2.0 and JWT for security'
    ]
  },
  {
    id: 3,
    title: 'Project Title Three',
    description: 'An exciting project that involved delivering a challenging and rewarding solution.',
    image: placeholder,
    repoLink: '#',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    features: [
      'Advanced data visualization',
      'Machine learning integration',
      'Automated reporting system',
      'Multi-user collaboration',
      'Real-time analytics dashboard'
    ],
    challenges: [
      'Complex data processing requirements',
      'Integration with ML models',
      'Real-time data synchronization'
    ],
    solutions: [
      'Implemented efficient data processing pipelines',
      'Used Celery for background task processing',
      'Applied WebSocket for real-time updates'
    ]
  }
];

const projects = [
  {
    image: placeholder,
    title: 'WayPoint',
    description: 'A mobile travel-planning app built with React Native, FastAPI, and PostgreSQL that delivers personalized recommendations based on a user\'s travel style. It features a travel style quiz, interactive map with Google Places integration, real-time collaborative itinerary planning, gamified achievements, and an AI-powered chatbot assistant. ',
    repoLink: '#',
  },
  {
    image: placeholder,
    title: 'Project Title Two',
    description: 'Another project demonstrating ability to build features using various technologies.',
    repoLink: '#',
  },
  {
    image: placeholder,
    title: 'Project Title Three',
    description: 'An exciting project that involved delivering a challenging and rewarding solution.',
    repoLink: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 fade-in-section" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
      <div className="px-15">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 gradient-text">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project} 
              projectId={index + 1}
              gradientClass={`gradient-project-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;