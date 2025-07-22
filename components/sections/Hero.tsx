"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import Iridescence to avoid SSR issues with WebGL
const Iridescence = dynamic(() => import("@/components/modules/iridescence"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />
});

const Hero: React.FC = () => {
  // Brand logos data - using actual logo images
  const brands = [
    {
      src: "/brands/company-logo-1.svg",
      alt: "Company Logo 1",
      width: 80,
      height: 28,
    },
    {
      src: "/brands/company-logo-3.svg",
      alt: "Company Logo 3", 
      width: 80,
      height: 28,
    },
    {
      src: "/brands/company-logo-4.svg",
      alt: "Company Logo 4",
      width: 80,
      height: 28,
    },
    {
      src: "/brands/company-logo-5.svg",
      alt: "Company Logo 5",
      width: 80,
      height: 28,
    },
  ];

  // Create enough repetitions for smooth infinite scrolling
  const repeatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-white">
      {/* Main Hero Area */}
      <div className="flex-1 relative flex items-center justify-center bg-white">
        {/* Hero Image Container with 8px padding */}
        <div className="absolute inset-2 rounded-3xl overflow-hidden bg-white">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.4}
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-gray-200/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">
              &quot;We make your website look world-class.&quot; 🇱🇰
            </span>
          </div>
          
          {/* Hero Text */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            <div>Designing Brands and Experiences</div>
            <div className="mt-2">Worth Remembering</div>
          </div>

          {/* CTA Button */}
          <button
            className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-2 group mx-auto"
            style={{
              boxShadow:
                "inset 0 2px 8px rgba(156, 163, 175, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            Book a call
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      {/* Trusted Brands Section */}
      <div className="relative z-20 bg-white/95 backdrop-blur-sm py-6 mt-auto">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex items-center">
            {/* Left side text */}
            <div className="flex-shrink-0">
              <p className="text-base font-sans text-gray-600 font-medium mr-16">
                Trusted by best<br />most exciting brands
              </p>
            </div>
            
            {/* Infinite Carousel with fade effects */}
            <div className="relative overflow-hidden flex-1">
              {/* Left fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none"></div>
              
              {/* Right fade effect */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/95 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling brand logos */}
              <motion.div 
                className="flex items-center"
                animate={{
                  x: [0, -220 * brands.length], // Move exactly one set of 4 brands (880px)
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 16,
                    ease: "linear",
                  },
                }}
              >
                {repeatedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[220px] px-8 whitespace-nowrap flex-shrink-0 py-4"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={brand.width}
                      height={brand.height}
                      priority={index < 4}
                      className="object-contain opacity-60 hover:opacity-100 hover:scale-150 transition-all duration-300 filter grayscale hover:grayscale-0 h-[32px] w-auto"
                      style={{ height: '32px', width: 'auto' }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
