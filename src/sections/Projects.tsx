import ProjectCard from '../components/ProjectCard';
import placeholder from '../assets/my-photo.jpg';
import waypoint from '../assets/waypoint/waypoint.png';
import waypoint1 from '../assets/waypoint/1.png';
import waypoint2 from '../assets/waypoint/2.png';
import waypoint3 from '../assets/waypoint/3.png';
import waypoint4 from '../assets/waypoint/4.png';
import waypoint5 from '../assets/waypoint/5.png';
import waypoint6 from '../assets/waypoint/6.png';
import waypoint7 from '../assets/waypoint/7.png';

// Export project details for use in ProjectDetails component
export const projectDetails = [
  {
    id: 1,
    title: 'WayPoint',
    description: "A mobile application built with React Native, FastAPI, and PostgreSQL that delivers personalized travel recommendations, real-time collaborative itinerary planning, and API-driven map integrations.",
    images: [
      waypoint,        // Thumbnail for project card
      waypoint1,       // Carousel image 1
      waypoint2,       // Carousel image 2
      waypoint3,       // Carousel image 3
      waypoint4,       // Carousel image 4
      waypoint5,       // Carousel image 5
      waypoint6,       // Carousel image 6
      waypoint7,       // Carousel image 7
    ],
    repoLink: 'https://github.com/latte-labs/waypoint',
    technologies: [
        'React Native (JavaScript)',
        'FastAPI (Python)',
        'PostgreSQL (Heroku Postgres)',
        'Firebase Realtime Database',
        'Google Places API',
        'Google Maps API',
        'OpenWeatherMap API',
        'OpenAI API'
    ],
    features: [
      'User profile management with authentication and preferences',
        'Travel style quiz for tailored recommendations',
        'Personalized location suggestions powered by APIs',
        'Interactive map with Google Maps integration',
        'Real-time collaborative itinerary planning',
        'Gamified badge and achievements system',
        'AI-powered chatbot travel assistant'
    ],
    challenges: [
        'Ensuring real-time synchronization for collaborative planning',
        'Integrating multiple third-party APIs reliably',
        'Optimizing mobile app performance',
        'Designing a seamless and intuitive user experience',
    ],
    solutions: [
        'Leveraged Firebase Realtime Database for instant updates',
        'Implemented robust error handling and fallbacks for API requests',
        'Optimized database queries and applied caching strategies',
        'Conducted iterative user testing and UI/UX refinements',
        'Deployed backend to Heroku with stable FastAPI services'
    ],
    overview: [
        "WayPoint is a mobile travel-planning app built with React Native, FastAPI, and PostgreSQL that delivers personalized recommendations based on a user’s travel style (relaxation, adventure, or culture). It features a travel style quiz, interactive map with Google Places integration, real-time collaborative itinerary planning, gamified achievements, and an AI-powered chatbot assistant. The backend uses FastAPI + Firebase for real-time updates, with integrations to Google Places, OpenWeatherMap, and OpenAI APIs."
    ]
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'Another project demonstrating ability to build features using various technologies.',
    images: [
      placeholder,
      placeholder,
      placeholder,
    ],
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
    ],
    overview: [
      'Full-stack web application with modern architecture',
      'Real-time data processing and synchronization',
      'Secure user authentication and authorization',
      'Responsive design for all device types',
      'RESTful API with comprehensive documentation',
      'Database optimization and caching strategies'
    ]
  },
  {
    id: 3,
    title: 'Project Title Three',
    description: 'An exciting project that involved delivering a challenging and rewarding solution.',
    images: [
      placeholder,
      placeholder,
      placeholder,
    ],
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
    ],
    overview: [
      'Advanced data visualization and analytics platform',
      'Machine learning model integration and deployment',
      'Automated reporting and dashboard generation',
      'Multi-user collaboration and data sharing',
      'Real-time analytics and monitoring system',
      'Scalable backend with Django and PostgreSQL'
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 fade-in-section" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
      <div className="px-15">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 gradient-text">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectDetails.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project} 
              projectId={project.id}
              gradientClass={`gradient-project-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;