'use client';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-[clamp(80px,10vw,160px)] px-6 flex flex-col items-center justify-center text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[clamp(40px,5vw,80px)] font-[300] mb-8 text-primary tracking-[-0.03em]"
      >
        Welcome to the era of spatial computing.
      </motion.h2>
      <motion.a 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        href="#"
        className="bg-[#0071E3] hover:bg-[#0077ED] text-white px-8 py-4 rounded-full text-lg font-[500] transition-colors"
      >
        Buy Now
      </motion.a>
    </section>
  );
}
