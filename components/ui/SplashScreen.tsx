"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  isVisible: boolean;
  onComplete?: () => void;
}

export default function SplashScreen({ isVisible, onComplete }: SplashScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isVisible && onComplete) {
          onComplete();
        }
      }}
    >
      {/* Pulsing Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          opacity: 1
        }}
        transition={{ 
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/synrgy-logo-small.svg"
          alt="Synrgy Logo"
          width={80}
          height={80}
          priority
          className="w-20 h-20"
        />
      </motion.div>
    </motion.div>
  );
} 