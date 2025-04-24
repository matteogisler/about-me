import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <span className="text-white font-medium">Matteo Gisler</span> &copy; {currentYear}. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-red-500" fill="#ef4444" />
            <span>and mind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;