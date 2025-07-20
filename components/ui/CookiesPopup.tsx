"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CookiesPopupProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookiesPopup({ onAccept, onDecline }: CookiesPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onDecline?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Cookie Popup */}
          <motion.div
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">🍪</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    We use cookies
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-lg transition-colors duration-200 flex-1"
                >
                  Accept All
                </button>
              </div>

              {/* Privacy Policy Link */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <a 
                  href="#" 
                  className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Learn more in our Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 