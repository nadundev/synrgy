"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      title: "Exceptional Designers",
      description:
        "We only have one rule: Hire senior-level designers and give them the tools to do their best work. Our team spans the globe and comprises of experts across multiple disciplines.",
      icon: "/services/icon-1.png",
    },
    {
      title: "Lightning Fast Delivery",
      description:
        "Get designs in Figma or we&apos;ll jump straight into code depending on what your project needs. Working in weekly sprints, we provide delivery updates every other day.",
      icon: "/services/icon-2.png",
    },
    {
      title: "An Extension of Your Team",
      description:
        "Our flexible engagement model makes it simple and affordable to work directly with senior designers. Adjust quickly as your needs change, and make every dollar count.",
      icon: "/services/icon-3.png",
    },
  ];

  const stats = [
    {
      number: "10/10",
      description: "Clients say they would recommend Synrgy",
    },
    {
      number: "1 Week",
      description: "Design Sprints",
    },
    {
      number: "10+ Years",
      description: "Average Years of Experience",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Main heading */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
            <span className="text-gray-400">We keep the process flexible</span>
            <br />
            <span className="text-gray-900">
              and the results extraordinary.
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Service Icon */}
              <div className="h-44 mb-6 flex items-center justify-start">
                <div className="relative w-40 h-40 group cursor-pointer">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3"
                    sizes="160px"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Mobile: Stacked layout, Desktop: Side by side */}
              <div className="flex flex-col items-center md:flex-row md:items-center md:gap-4">
                <div className="text-4xl md:text-4xl lg:text-5xl font-medium text-gray-300 mb-2 md:mb-0">
                  {stat.number}
                </div>
                <div className="text-sm md:text-sm lg:text-base text-gray-600 max-w-[200px] text-center md:text-left">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
