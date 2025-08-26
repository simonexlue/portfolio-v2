import React from 'react';
import SocialIcon from '../components/SocialIcon';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] bg-black geometric-bg"
    >
      <div className="hero-blur-bg">
        <h1 className="text-7xl font-bold mb-4 gradient-text">
          Hi, I'm Simone
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          A passionate <span className="gradient-text">Software Developer</span> and Frontend Enthusiast crafting beautiful and functional web experiences.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <SocialIcon
            href="https://github.com/simonexlue"
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.073 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            }
          />
          <SocialIcon
            href="https://www.linkedin.com/in/simonelue/"
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.966 0-1.75-.78-1.75-1.733 0-.953.784-1.733 1.75-1.733s1.75.78 1.75 1.733c0 .953-.784 1.733-1.75 1.733zm13.5 11.4h-3v-5.604c0-1.337-.024-3.057-1.862-3.057-1.863 0-2.15 1.454-2.15 2.96v5.701h-3v-10h2.881v1.367h.04c.401-.762 1.379-1.562 2.839-1.562 3.036 0 3.598 2 3.598 4.591v5.604z" />
              </svg>
            }
          />
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
          >
            View My Work
          </a>
          <span className="text-gray-600">•</span>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;