"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure fonts are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show splash for 2.5 seconds

    // Also hide splash when document is ready
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <SplashScreen 
        isVisible={isLoading} 
        onComplete={() => setIsLoading(false)}
      />
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
} 