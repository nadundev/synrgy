"use client"

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Main heading with gradient */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight lg:leading-20 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 bg-clip-text text-transparent">
            Work seamlessly with a creative team<br />
            that&apos;s built to match your pace<br />
            and exceed your expectations.
          </span>
        </motion.h2>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button 
            className="group flex items-center gap-4 bg-black hover:bg-gray-900 text-white rounded-full py-4 px-6 text-sm font-medium transition-all duration-200"
            style={{
              boxShadow:
                "inset 0 2px 8px rgba(156, 163, 175, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Image
                src="/synrgy-logo-small.svg"
                alt="Synrgy Logo"
                width={24}
                height={24}
                className="w-6 h-6"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            {/* Text content */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2">
                <span className="font-medium text-lg">Book a Call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
              <span className="text-sm text-gray-400">Let&apos;s talk about your project</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 