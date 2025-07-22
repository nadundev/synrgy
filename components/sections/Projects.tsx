"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-white">
      {/* Large Background Text */}
      <motion.h2
        className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem] text-center font-medium select-none leading-none bg-gradient-to-b from-gray-400 via-gray-300 to-transparent bg-clip-text text-transparent"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Projects
      </motion.h2>
      {/* Mobile Card Grid - md and smaller screens */}
      <motion.div 
        className="relative z-10 -mt-4 md:-mt-8 lg:hidden max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 gap-16">
          <ProjectCard 
            className="w-full" 
            title="Dynamic Fitness Brand Design"
            description="2024 DYNAMIC FITNESS BRAND"
            brandName="Dynamic Fitness"
            hoverTitle="Creating award winning website for a fitness brand"
            mobileTitle="Dynamic Fitness Brand Design"
            image="/projects/dynamic.png"
          />
          <ProjectCard 
            className="w-full" 
            title="Outbound Codes"
            description="2024 OUTBOUND CODES"
            brandName="OUTBOUNDCODE"
            hoverTitle="OutboundCode Website"
            mobileTitle="OutboundCode Website"
            image="/projects/outboundcode.png"
          />
        </div>
      </motion.div>

      {/* Desktop Bento Grid - lg and larger screens */}
      <motion.div 
        className="relative z-10 -mt-20 max-w-[1400px] mx-auto hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 lg:gap-8 min-h-[500px]">
          {/* Featured Project Card - Larger */}
            <ProjectCard 
              className="w-full" 
              title="Dynamic Fitness Brand Design"
              description="2024 DYNAMIC FITNESS BRAND"
              brandName="Dynamic Fitness"
              hoverTitle="Creating award winning website for a fitness brand"
              image="/projects/dynamic.png"
            />
            <ProjectCard 
              className="w-full" 
              title="Outbound Codes"
              description="2024 OUTBOUND CODES"
              brandName="OUTBOUNDCODE"
              hoverTitle="OutboundCode Website"
              image="/projects/outboundcode.png"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
