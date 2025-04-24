import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Build your vCard payload
  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Matteo Gisler',
    'EMAIL;TYPE=Email:matteo.gisler05@gmail.com',
    'URL;TYPE=Homepage:https://matteogisler.com',
    'URL;TYPE=LinkedIn:https://www.linkedin.com/in/matteo-gisler-961bb9221/',
    'END:VCARD'
  ].join('\n');

  // URL-encode for QR generator
  const qrData = encodeURIComponent(vCard);

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:matteo.gisler05@gmail.com',
      text: 'matteo.gisler05@gmail.com'
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
      href: 'https://www.linkedin.com/in/matteo-gisler-961bb9221/',
      text: 'linkedin.com/in/matteogisler'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left column: Contact Information */}
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

            <motion.div variants={itemVariants} className="mt-10">
              <p className="text-gray-300 mb-4">
                I'm currently seeking full-time roles in the blockchain and Web3 sectors, but I'm also open to opportunities beyond the Web3 space.
              </p>
              <p className="text-gray-400">
                Based in Zug, Switzerland - available for remote work worldwide.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column: vCard + QR Code */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">Let’s Connect!</h3>

            <a
              href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`}
              download="Matteo_Gisler.vcf"
              className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-colors mb-6"
            >
              <FileDown size={20} />
              <span className="ml-2">Download vCard</span>
            </a>

            <div className="bg-white p-2 rounded-lg">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`}
                alt="Scan to add vCard"
              />
            </div>
            <p className="text-gray-400 mt-4 max-w-xs">
              Scan the QR code to instantly save my contact details.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
