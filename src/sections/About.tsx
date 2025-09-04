import React from 'react';
const photo = '/images/my-photo.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 fade-in-section" style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
                      <div className="w-full h-full px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 xl:gap-32">
          <img
            src={photo}
            alt="My Photo"
            className="w-80 h-80 lg:w-[350px] lg:h-[350px] xl:w-[350px] xl:h-[350px] rounded-full border-4 border-indigo-500 object-cover"
          />
          <div className="text-center md:text-left max-w-md lg:max-w-2xl xl:max-w-3xl">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-10 gradient-text">About Me</h2>
            <p className="text-gray-300 mb-6 text-lg lg:text-xl xl:text-2xl">
              I am a dedicated software developer with a strong focus on creating intuitive and visually appealing user
              interfaces. My journey in tech started with a fascination for how digital products impact our daily lives,
              leading me to specialize in frontend development.
            </p>
            <p className="text-gray-300 mb-6 text-lg lg:text-xl xl:text-2xl">
              With a solid foundation in JavaScript, React, and modern web technologies, I love transforming complex
              problems into elegant, user-friendly solutions. I'm always eager to learn new technologies and improve my
              craft.
            </p>
            <p className="text-gray-300 text-lg lg:text-xl xl:text-2xl">
                When I'm not coding, you can find me trying to hit a golf ball at the range, eating new foods, or trying to learn something new.
            </p>


        </div>
      </div>
    </section>
  );
};

export default About;