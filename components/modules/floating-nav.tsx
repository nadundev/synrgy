"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function FloatingNav() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsExpanded(!isExpanded)
  }

  const closeMenu = () => {
    setIsExpanded(false)
  }

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    // Only add listener when menu is expanded
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        ref={menuRef}
        className={`
          bg-white/10 backdrop-blur-2xl border border-white/20
          transition-all duration-300 ease-out
          px-2 py-2 w-[480px]
        `}
        style={{
          borderRadius: isExpanded ? "24px" : "50px",
          boxShadow: isHovered ? `
            inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1),
            0 20px 64px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.12)
          ` : `
            inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1),
            0 10px 32px rgba(0, 0, 0, 0.1),
            0 4px 8px rgba(0, 0, 0, 0.08)
          `,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Collapsed State */}
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ease-out ${isExpanded ? "mb-6" : ""}`}
        >
          {/* Logo */}
          <Image 
            src="/synrgy-logo-small.svg" 
            alt="Logo" 
            width={48} 
            height={100} 
            priority
            className="h-12 w-auto"
            style={{ width: 'auto', height: '3rem' }}
          />

          {/* Hamburger Menu - 2 lines - Centered */}
          <button
            onClick={toggleMenu}
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-8 h-6 space-y-1.5 transition-all duration-250 ease-out"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-250 ease-out ${
                isExpanded ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-250 ease-out ${
                isExpanded ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>

          {/* Book a Call Button */}
          <button
            className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-2 group"
            style={{
              boxShadow:
                "inset 0 2px 8px rgba(156, 163, 175, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Expanded Menu Items */}
        <div
          className={`
            transition-all duration-300 ease-out
            ${isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
          `}
          style={{
            overflow: "hidden",
          }}
        >
          <nav className="space-y-4">
            <a
              href="#"
              className="block text-2xl font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
              onClick={closeMenu}
            >
              What We Do
            </a>
            <a
              href="#"
              className="block text-2xl font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
              onClick={closeMenu}
            >
              Our Work
            </a>
            <a
              href="#"
              className="block text-2xl font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
              onClick={closeMenu}
            >
              Pricing
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
