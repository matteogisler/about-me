import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown, Briefcase, GraduationCap } from 'lucide-react';
import resume_matteo_gisler from '../assets/Resume_Matteo_Gisler.pdf';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const timelineItems = [
    {
      icon: Briefcase,
      period: "Apr. 2025",
      title: "Hackathon 2nd Place",
      company: "Baden Hackt",
      description: "Developed a mobile app with flutter that uses AI for personalized coaching in chat form. Won 2nd place."
    },
    {
      icon: GraduationCap,
      period: "Oct. 2023 - Nov. 2023",
      title: "New York - Work Experience Abroad",
      company: "Greater Zurich Area",
      description: "Had the opportunity to go to New York City for a month and experience the life and work culture."
    },
    {
      icon: Briefcase,
      period: "2021 - Present",
      title: "Developer in Training",
      company: "TIE International AG",
      description: "Completing a comprehensive developer apprenticeship with a focus on web development and emerging technologies."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Resume & Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and learning experiences in the world of development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <a 
              href={resume_matteo_gisler}
              className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300 mx-auto w-fit"
              download
            >
              <FileDown size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: index * 0.2 }
                      }
                    }}
                    className="relative flex flex-col md:flex-row"
                  >
                    {/* ← icon container (one div for both breakpoints) */}
                    <div
                      className="
                        absolute top-0 
                        left-0  md:left-1/2 
                        transform 
                          -translate-x-0    md:-translate-x-1/2
                        w-6   md:w-10 
                        h-6   md:h-10 
                        rounded-full 
                        bg-indigo-600 
                        flex items-center justify-center
                      "
                    >
                      <Icon size={ index === 0 ? 16 : 20 } className="text-white" />
                    </div>

                    {/* ← left-hand content */}
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <div className="text-indigo-400 font-medium">{item.company}</div>
                      <div className="text-gray-500">{item.period}</div>
                    </div>

                    {/* ← right-hand description */}
                    <div className="md:w-1/2 md:pl-8 pl-6 border-l md:border-l-0 border-gray-700">
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;