import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Trophy, Rocket, BookOpen } from 'lucide-react';

const About: React.FC = () => {
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

  const skillsData = [
    { name: 'Solidity', level: 85 },
    { name: 'React / Web Dev', level: 90 },
    { name: 'Smart Contracts', level: 80 },
    { name: 'DeFi Protocols', level: 75 },
    { name: 'NFT Development', level: 82 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
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
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-indigo-400">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a junior blockchain developer, I've recently completed my developer apprenticeship 
                where I discovered my passion for Web3 technologies. My journey began with traditional 
                web development, but I quickly became fascinated by blockchain's potential to revolutionize 
                how we build digital systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I've participated in multiple hackathons, including a recent one where our Web3 iOS wallet 
                secured 2nd place. I'm constantly expanding my knowledge of smart contracts, decentralized 
                applications, and the evolving blockchain ecosystem.
              </p>
            </motion.div>

            <div>
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-indigo-400">
                Skills & Expertise
              </motion.h3>
              
              <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
                {skillsData.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.6, delay: index * 0.1 }
                      }
                    }}
                    className="mb-4"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: Code, title: "Blockchain Dev", text: "Building decentralized applications with Solidity and Web3.js" },
              { icon: Trophy, title: "Hackathon Winner", text: "2nd place for Web3 iOS wallet hackathon project" },
              { icon: Rocket, title: "Fast Learner", text: "Quickly adapting to new blockchain technologies and frameworks" },
              { icon: BookOpen, title: "Continuous Growth", text: "Always expanding knowledge through research and practice" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="text-indigo-400 mb-4">
                    <Icon size={36} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;