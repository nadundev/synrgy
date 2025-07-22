"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const services = [
    "Design a brand worth remembering",
    "Story-driven web experiences that convert",
    "Dedicated product designers",
    "Output focused design sprints",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Main heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight lg:leading-20 max-w-5xl">
            <span className="text-gray-900">
              The design and development dream team to build world-class websites.{" "}
            </span>
            <span className="text-gray-400">
              We help our clients to elevate their brand.
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Description and Pricing */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Company description */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Over 4 years grinding alongside founders with a story that needs telling. We have delived to 15+ clients all around the world.
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Synrgy is the design partner teams turn to when speed and
                quality matter most. Our approach is fast and flexible - purpose
                built for startup speed.
              </p>
            </div>

            {/* Pricing */}
            <div className="pt-8 md:flex md:gap-8 md:items-center">
              <p className="text-gray-400 text-lg">
                Projects start at
                <br />
                <span className="text-gray-900 font-medium">
                  LKR 80,000&nbsp;.00
                </span>
              </p>
              <button
                className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-2 group h-12"
                style={{
                  boxShadow:
                    "inset 0 2px 8px rgba(156, 163, 175, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                View Pricing
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Services List */}
          <motion.div
            className="space-y-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 py-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-5 w-5 text-gray-900" />
                </div>
                <p className="text-lg text-gray-900 font-medium">{service}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
