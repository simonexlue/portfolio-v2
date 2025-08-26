import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[calc(100vh-4rem)] flex items-center bg-gray-800 fade-in-section">
      <div className="w-full px-15 lg:px-20 xl:px-24 max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 gradient-text">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-4 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-4 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Your message..."
              className="w-full px-4 py-4 rounded-md bg-gray-700 text-white h-45 focus:outline-none"
            />
          </div>
          <div className="text-center pt-4">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;