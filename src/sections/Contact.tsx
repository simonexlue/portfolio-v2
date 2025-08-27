import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[calc(100vh-4rem)] flex items-center bg-gray-800 fade-in-section py-8">
      <div className="w-full px-8 lg:px-12 xl:px-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 gradient-text">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-6 text-sm lg:text-base">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-3 rounded-md bg-gray-700 text-white focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-3 py-3 rounded-md bg-gray-700 text-white focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              placeholder="Your message..."
              className="w-full px-3 py-3 rounded-md bg-gray-700 text-white h-24 focus:outline-none resize-none text-sm"
            />
          </div>
          <div className="text-center pt-2">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;