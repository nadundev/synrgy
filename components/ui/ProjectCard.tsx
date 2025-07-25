"use client";

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  brandName?: string;
  topLabel?: string;
  bottomLeftText?: string;
  bottomRightText?: string;
  bottomRightSubText?: string;
  hoverTitle?: string;
  hoverDescription?: string;
  mobileTitle?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Ditto Brand Design",
  description = "2024 DITTO BRAND",
  image = "/project-placeholder.jpg",
  brandName = "",
  topLabel = "",
  bottomLeftText = "",
  bottomRightText = "",
  bottomRightSubText = "",
  hoverTitle = "View Project",
  hoverDescription = "",
  mobileTitle = "",
  className = "",
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl overflow-hidden h-full min-h-[400px] shadow-2xl transition-shadow duration-300 group-hover:shadow-3xl">
        {/* Top Brand Label */}
        <div className="absolute top-6 left-6 z-10">
          <span className="text-xs font-medium text-white tracking-wider uppercase">
            {topLabel}
          </span>
        </div>

        {/* Background Image */}
        {image && (
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Main Content Area */}
        <div className="relative w-full h-full flex items-center justify-center">

          {/* Bottom Project Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between items-center text-xs text-white">
              <div>
                <span className="font-medium">{bottomLeftText}</span>
              </div>
              <div className="text-right">
                <span>{bottomRightText}</span>
                <div className="text-white mt-1">{bottomRightSubText}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay - Slides in from bottom - Desktop only */}
        <div className="absolute inset-0 z-20 overflow-hidden hidden lg:block">
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/30 via-black/10 to-transparent transform translate3d(0, 100%, 0) group-hover:translate3d(0, 0, 0) transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] will-change-transform">
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out">
              <div className="inline-flex items-center bg-black/40 border border-white/30 rounded-full px-6 py-3 shadow-lg">
                <h3 className="text-xl font-medium">{hoverTitle}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Shadow */}
      <div className="absolute inset-0 bg-black/10 rounded-2xl blur-xl transform translate-y-4 -z-10" />

      {/* Mobile Title - Only visible on mobile */}
      {mobileTitle && (
        <div className="mt-4 lg:hidden">
          <h3 className="text-lg font-medium text-gray-900">{mobileTitle}</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectCard; 