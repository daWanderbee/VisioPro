"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2-second initial loader to perfectly hide the Flash of Unstyled Content from GSAP hydration and Canvas preloading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 border-t-2 border-r-2 border-transparent border-t-white rounded-full animate-spin mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            <div className="text-white text-xl font-light tracking-[0.3em] uppercase">VisioPro</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
