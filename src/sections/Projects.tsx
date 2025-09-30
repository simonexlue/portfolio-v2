import ProjectCard from '../components/ProjectCard';
//import upcoming from '../assets/upcoming.jpg';

// Waypoint
const waypoint = '/images/waypoint/waypoint.png';
const waypoint1 = '/images/waypoint/1.png';
const waypoint2 = '/images/waypoint/2.png';
const waypoint3 = '/images/waypoint/3.png';
const waypoint4 = '/images/waypoint/4.png';
const waypoint5 = '/images/waypoint/5.png';
const waypoint6 = '/images/waypoint/6.png';
const waypoint7 = '/images/waypoint/7.png';

// The Body Shop Clone
const thebodyshop = '/images/thebodyshop/thebodyshop.png';
const thebodyshop1 = '/images/thebodyshop/1.PNG';
const thebodyshop2 = '/images/thebodyshop/2.PNG';
const thebodyshop3 = '/images/thebodyshop/3.PNG';
const thebodyshop4 = '/images/thebodyshop/4.PNG';
const thebodyshop5 = '/images/thebodyshop/5.PNG';
const thebodyshop6 = '/images/thebodyshop/6.PNG';

// Red Ball Drills Report Portal
const redballdrills = '/images/rbd/rbd.png';
const redballdrills1 = '/images/rbd/1.png';
const redballdrills2 = '/images/rbd/2.png';
const redballdrills3 = '/images/rbd/3.png';
const redballdrills4 = '/images/rbd/4.png';
const redballdrills5 = '/images/rbd/5.png';

// Quantra
//const quantra = '/images/quantra/quantra.png';
const quantra1 = '/images/quantra/1.png';
const quantra2 = '/images/quantra/2.png';
const quantra3 = '/images/quantra/3.png';
const quantra4 = '/images/quantra/4.png';

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
  },
  {
    id: 4,
    title: 'Quantra',
    description: 'Cross-platform mobile app being built with React Native (Expo Dev Client) to streamline restaurant inventory management using voice input,    Firebase authentication, and Firestore storage.',
    private: false,
    images: [
      quantra1,
      quantra1,
      quantra2,
      quantra3,
      quantra4,
    ],
    repoLink: '#',
    technologies: [
      'React Native',
      'Expo Dev Client',
      'Firebase',
      'TypeScript'
    ],
    features: [
        'Role-based login for managers using Firebase Auth',
        'Voice-to-text inventory input with on-device STT (Apple Speech / Android SpeechRecognizer)',
        'Manual edit mode to adjust item counts after STT transcription',
        'Global item catalog with predefined items and synonyms to ensure consistency',
        'Inventory submissions stored in Firestore with item, qty, and critical flag',
        'Realtime viewing of current inventory for the logged-in store',
        'Offline-first support via Firestore SDK caching',
        'Critical stock flags highlighted in the UI for quick action',
        'Planned for scalability with FastAPI + Postgres backend for advanced reporting, analytics, and purchase order workflows'
      ],
      challenges: [
        'Employees often avoid manual inventory updates due to time and friction',
        'Ensuring consistency across multiple stores with a shared item catalog',
        'Handling offline use cases where Wi-Fi in kitchens is unreliable',
        'Designing a simple data structure that supports an MVP today while leaving space for scalable backend integration later'
      ],
      solutions: [
        'Introduce voice-first inventory input to lower friction and increase adoption',
        'Maintain a global item catalog with synonyms to prevent duplicate entries',
        'Leverage Firestore’s offline caching so counts can be submitted without internet',
        'Keep the MVP schema minimal (users, items, inventoryCounts) while planning to extend with FastAPI + Postgres for scalability'
      ],
      overview: [
        "Quantra is an MVP mobile app currently in development to address the pain of manual inventory across multiple restaurant locations. Managers log in with Firebase Auth, use their phone’s mic to dictate inventory counts, edit them inline, and save directly to Firestore. The app enforces consistency with a predefined item catalog and automatically flags critical stock shortages. A key differentiator is offline-first support—staff can submit counts even with poor Wi-Fi, with automatic syncing once online. By using React Native with Expo Dev Client, the app runs natively on both iOS and Android, leveraging each platform’s built-in speech-to-text engine. While Firestore serves as the MVP data store, the architecture anticipates growth with FastAPI and Postgres planned for future reporting, analytics, and supplier integrations. This project highlights my ability to design pragmatic, scalable solutions—delivering immediate usability while positioning the app for enterprise-level expansion."
      ]
  }
  
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 fade-in-section" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
      <div className="px-6 md:px-15">
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