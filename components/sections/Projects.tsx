"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-white">
      {/* Large Background Text */}
      <h2
        className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem] text-center font-medium select-none leading-none bg-gradient-to-b from-gray-400 via-gray-300 to-transparent bg-clip-text text-transparent"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        Projects
      </h2>
      {/* Bento Grid */}
      <div className="relative z-10 -mt-8 md:-mt-16 lg:-mt-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 lg:gap-8 min-h-[500px]">
          {/* Featured Project Card - Larger */}
            <ProjectCard 
              className="w-full" 
              title="Dynamic Fitness Brand Design"
              description="2024 DYNAMIC FITNESS BRAND"
              brandName="Dynamic Fitness"
              topLabel="CRAFTED"
              bottomLeftText="2024 DYNAMIC FITNESS"
              bottomRightText="BRAND GUIDELINES"
              bottomRightSubText="LOGO & WEBSITE DESIGN"
              hoverTitle="Dynamic Fitness Rebrand"
              hoverDescription="Complete brand identity system including logo design, color palette, typography, and responsive website development for a modern fitness company."
              image=""
            />
            <ProjectCard 
              className="w-full" 
              title="TechFlow SaaS Platform"
              description="2024 TECHFLOW BRAND"
              brandName="TechFlow"
              topLabel="DESIGNED"
              bottomLeftText="2024 TECHFLOW"
              bottomRightText="SAAS PLATFORM"
              bottomRightSubText="UI/UX & BRANDING"
              hoverTitle="TechFlow Platform Design"
              hoverDescription="Modern SaaS platform interface design with focus on user experience, data visualization, and scalable component system."
              image=""
            />
        </div>
      </div>
    </section>
  );
};

export default Projects;
