import ProjectCard from '../components/ProjectCard';

// Waypoint
import waypoint from '../assets/waypoint/waypoint.png';
import waypoint1 from '../assets/waypoint/1.png';
import waypoint2 from '../assets/waypoint/2.png';
import waypoint3 from '../assets/waypoint/3.png';
import waypoint4 from '../assets/waypoint/4.png';
import waypoint5 from '../assets/waypoint/5.png';
import waypoint6 from '../assets/waypoint/6.png';
import waypoint7 from '../assets/waypoint/7.png';

// The Body Shop Clone
import thebodyshop from '../assets/thebodyshop/thebodyshop.png';
import thebodyshop1 from '../assets/thebodyshop/1.png';
import thebodyshop2 from '../assets/thebodyshop/2.png';
import thebodyshop3 from '../assets/thebodyshop/3.png';
import thebodyshop4 from '../assets/thebodyshop/4.png';
import thebodyshop5 from '../assets/thebodyshop/5.png';
import thebodyshop6 from '../assets/thebodyshop/6.png';

// Red Ball Drills Report Portal
import redballdrills from '../assets/rbd/rbd.png';
import redballdrills1 from '../assets/rbd/1.png';
import redballdrills2 from '../assets/rbd/2.png';
import redballdrills3 from '../assets/rbd/3.png';
import redballdrills4 from '../assets/rbd/4.png';
import redballdrills5 from '../assets/rbd/5.png';


// Export project details for use in ProjectDetails component
export const projectDetails = [
  {
    id: 1,
    title: 'WayPoint',
    description: "A mobile application built with React Native, FastAPI, and PostgreSQL that delivers personalized travel recommendations, real-time collaborative itinerary planning, and API-driven map integrations.",
    private: false,
    images: [
      waypoint,  //thumbnail for project card
      waypoint1,    
      waypoint2, 
      waypoint3,       
      waypoint4,   
      waypoint5,    
      waypoint6,       
      waypoint7,       
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
    title: 'The Body Shop Clone',
    description: 'Developed a The Body Shop clone on Shopify. Created a bundle-builder powered by metaobjects with product bundle discount calculations. Worked with products, collections, metaobjects, and metafields.',
    private: true,
    images: [
      thebodyshop,
      thebodyshop1,
      thebodyshop2,
      thebodyshop3,
      thebodyshop4,
      thebodyshop5,
      thebodyshop6,
    ],
    repoLink: '#',
    technologies: ['Shopify', 'Liquid', 'Javascript', 'HTML', 'CSS'],
    features: [
        'Custom bundle-builder powered by metaobjects',
        'Integration of metaobjects and metafields for product data',
        'Replication of The Body Shop storefront using the Dawn theme',
        'Responsive theme design',
        'Collection and product detail page customization'
    ],
    challenges: [
        'Learning to extend Shopify Dawn theme',
        'Implementing a bundle-builder within theme constraints',
        'Managing product and collection data with metaobjects/metafields'
    ],
    solutions: [
        'Extended Dawn theme using custom Liquid sections',
        'Used metaobjects and metafields to handle bundle-builder configuration',
        'Replicated layouts and storefront pages for a realistic clone'
    ],
    overview: [
        "The Body Shop Clone is a Shopify storefront replica built with the Dawn theme to demonstrate theme development skills. The project focused on creating a bundle-builder feature powered by metaobjects and metafields, while replicating the core functionality of products, collections, and storefront layouts. Emphasis was placed on responsive design, Liquid customization, and accurately mirroring the real storefront experience."
    ]
  },
  {
    id: 3,
    title: 'Red Ball Drills Report Portal',
    description: 'Freelance engagement delivering production-ready enhancements to a reporting system, including Node.js/Next.js upgrades, UI improvements, and PDF export functionality.',
    private: true,
    images: [
      redballdrills,
      redballdrills1,
      redballdrills2,
      redballdrills3,
      redballdrills4,
      redballdrills5,
    ],
    repoLink: '#',
    technologies: ['Next.js', 'Node.js', 'React', 'Tailwind CSS', 'Javascript'],
    features: [
        'Upgraded application from Node.js 18 → Node.js 22 and Next.js 13 → 15',
        'Resolved dependency incompatibilities during framework upgrade',
        'Improved moderator table responsiveness with horizontal scrolling on smaller screens',
        'Implemented rich text editing with bold, underline, lists, and markdown storage',
        'Ensured rich text renders correctly when viewing or printing reports',
        'Disabled appropriate fields with contextual info tooltips',
        'Refined section titles with hover tooltips for clarity',
        'Added export-to-editable-PDF feature with Playwright + Chromium'
    ],
    challenges: [
        'Framework upgrade required breaking changes (Next.js 13 → 15, React 18 → 19)',
        'PrimeReact Editor styling conflicts with existing form fields',
        'Maintaining consistent rich text formatting across editing, saving, and viewing',
        'Designing professional PDFs with editable fields while preserving security'
    ],
    solutions: [
        'Upgraded dependencies with version alignment (Next.js 15, React 19, eslint-config-next)',
        'Configured PrimeReact unstyled mode and applied custom CSS for consistent editor styling',
        'Imported Quill CSS and customized toolbar/content borders for seamless UI',
        'Used markdown to store rich text without changing database schema',
        'Implemented Playwright-based PDF generation with sanitized input and print-optimized styling',
        'Added secure API endpoint and template engine for professional PDF output'
    ],
    overview: [
      "Red Ball Drills Reporting Portal was a freelance engagement where I modernized and enhanced a client’s enterprise reporting system. The project involved a migration from Node.js 18 to Node.js 22, requiring careful dependency alignment and resolution of breaking changes. Beyond upgrading the stack, I delivered significant usability improvements, including responsive moderator tables, rich text editing with markdown persistence, and refined section labeling with contextual tooltips. A key highlight was designing and implementing a production-ready PDF export system using Playwright and Chromium, enabling editable, professional-grade reports directly from the platform. Throughout the project, I emphasized security, performance, and maintainability—ensuring the application not only met immediate client needs but was also positioned for long-term scalability."
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