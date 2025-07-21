import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white min-h-[400px] flex flex-col justify-end overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem] font-semibold select-none leading-none bg-gradient-to-b from-gray-400 via-gray-300 to-transparent bg-clip-text text-transparent"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
            }}>
          Synrgy
        </h2>
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © 2025 SYNRGY. All rights reserved.
          </div>
          
          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 