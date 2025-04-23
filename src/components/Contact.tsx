import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email',
      href: 'mailto:matteo.gisler@example.com',
      text: 'matteo.gisler@example.com'
    },
    { 
      icon: Github, 
      label: 'GitHub',
      href: 'https://github.com/matteogisler',
      text: 'github.com/matteogisler' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/matteogisler',
      text: 'linkedin.com/in/matteogisler'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss blockchain opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.6, delay: 0.3 + index * 0.1 }
                        }
                      }}
                    >
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-indigo-600 transition-colors duration-300">
                        <Icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">{link.label}</h4>
                        <p className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300">{link.text}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-10"
              >
                <p className="text-gray-300 mb-4">
                  I'm currently open to freelance projects and full-time opportunities in the blockchain and Web3 space.
                </p>
                <p className="text-gray-400">
                  Based in Zurich, Switzerland - available for remote work worldwide.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-indigo-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="text-green-400 text-center mt-4">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;