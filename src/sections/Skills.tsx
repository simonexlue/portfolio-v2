import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 fade-in-section">
      <div className="px-6 md:px-15">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 gradient-text">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {/* Frontend */}
          <div
            className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-cyan-pink"
            style={{ backgroundColor: 'rgb(14, 19, 30)' }}
          >
            <h3 className="text-xl font-semibold mb-4 gradient-frontend">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
              <li>Liquid (Shopify)</li>
            </ul>
          </div>

          {/* Backend */}
          <div
            className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-red-yellow"
            style={{ backgroundColor: 'rgb(14, 19, 30)' }}
          >
            <h3 className="text-xl font-semibold mb-4 gradient-backend">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Python</li>
              <li>FastAPI</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          {/* Databases */}
          <div
            className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-cyan-blue"
            style={{ backgroundColor: 'rgb(14, 19, 30)' }}
          >
            <h3 className="text-xl font-semibold mb-4 gradient-databases">Databases</h3>
            <ul className="space-y-2 text-gray-300">
              <li>PostgreSQL</li>
              <li>Firebase Realtime DB</li>
              <li>Firestore</li>
              <li>Supabase</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Tools & Others */}
          <div
            className="p-6 rounded-lg transition-transform duration-300 hover:scale-105 gradient-border-pink"
            style={{ backgroundColor: 'rgb(14, 19, 30)' }}
          >
            <h3 className="text-xl font-semibold mb-4 gradient-tools">Tools & Others</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git & GitHub</li>
              <li>Shopify</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
              <li>Mobile Development</li>
              <li>E-commerce</li>
              <li>AWS S3</li>
              <li>OpenAI Vision + LLM</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
