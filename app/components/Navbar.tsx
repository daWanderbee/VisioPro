'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="fixed top-6 left-1/2 w-[90%] max-w-3xl z-[100] flex items-center justify-between px-6 py-3 bg-black/50 backdrop-blur-3xl border border-white/[0.08] rounded-full shadow-2xl"
      >
        <div className="text-white font-[500] text-xl tracking-tight cursor-pointer">
          VisioPro
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-[13px] font-[400] text-[#a1a1a6]">
          <a href="#" className="hover:text-white transition-colors duration-300">Overview</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Design</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Technology</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Tech Specs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-4 py-1.5 rounded-full text-[13px] font-[500] hover:scale-105 transition-transform duration-300 ease-out active:scale-95 hidden md:block">
            Buy
          </button>
          
          <button 
            className="md:hidden text-white ml-2 p-1 focus:outline-none" 
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md md:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-64 h-full bg-[#111111] border-l border-white/10 p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-[500] text-xl tracking-tight">Menu</span>
                <button onClick={() => setIsOpen(false)} className="text-[#a1a1a6] hover:text-white p-1 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col space-y-6 text-[15px] font-[400] text-[#a1a1a6]">
                <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Overview</a>
                <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Design</a>
                <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Technology</a>
                <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Tech Specs</a>
              </div>

              <div className="mt-auto">
                <button className="w-full bg-white text-black px-4 py-3 rounded-full text-[15px] font-[500] transition-transform duration-300 active:scale-95">
                  Buy VisioPro
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
