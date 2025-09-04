import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 fade-in-section">
      <div className="px-6 md:px-15">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 gradient-text">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-cyan-pink" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
            <h3 className="text-xl font-semibold mb-4 gradient-frontend">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-red-yellow" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
            <h3 className="text-xl font-semibold mb-4 gradient-backend">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Python</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-cyan-blue" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
            <h3 className="text-xl font-semibold mb-4 gradient-databases">Databases</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Firebase Firestore</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-pink" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
            <h3 className="text-xl font-semibold mb-4 gradient-tools">Tools & Others</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;