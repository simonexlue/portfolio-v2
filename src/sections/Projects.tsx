import ProjectCard from '../components/ProjectCard';
import placeholder from '../assets/my-photo.jpg';

const projects = [
  {
    image: placeholder,
    title: 'Project Title One',
    description: 'A brief description of this project, its challenges, technologies used and key features that showcase my proficiency.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    image: placeholder,
    title: 'Project Title Two',
    description: 'Another project demonstrating ability to build features using various technologies.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    image: placeholder,
    title: 'Project Title Three',
    description: 'An exciting project that involved delivering a challenging and rewarding solution.',
    demoLink: '#',
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
              gradientClass={`gradient-project-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;