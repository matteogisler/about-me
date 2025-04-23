import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../utils/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden group border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all duration-300"
                aria-label="View Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300"
                aria-label="View Code on GitHub"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-medium bg-gray-700 text-indigo-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.achievement && (
          <div className="text-sm text-yellow-400 font-medium flex items-center">
            <div className="mr-1">🏆</div>
            {project.achievement}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;