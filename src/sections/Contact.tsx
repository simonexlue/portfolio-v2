import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (!formspreeEndpoint) {
        throw new Error('Formspree endpoint not configured');
      }
      
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-4rem)] flex items-center bg-gray-800 fade-in-section py-8">
      <div className="w-full px-6 lg:px-12 xl:px-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 gradient-text">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-6 text-sm lg:text-base">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-md text-center">
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-600 text-white rounded-md text-center">
            Something went wrong. Please try again or reach out directly via email.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 rounded-md bg-gray-700 text-white focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 rounded-md bg-gray-700 text-white focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 rounded-md bg-gray-700 text-white h-24 focus:outline-none resize-none text-sm"
            />
          </div>
          <div className="text-center pt-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;