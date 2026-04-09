'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const specs = [
  { label: 'Resolution', value: '23M pixels' },
  { label: 'Refresh Rate', value: 'Up to 100Hz' },
  { label: 'Weight', value: '600-650g' },
  { label: 'Storage', value: 'Up to 1TB' },
  { label: 'Battery Life', value: '2 hours general' },
];

export default function SpecTable() {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tableRef.current) return;
    const rows = tableRef.current.querySelectorAll('.spec-row');
    
    const ctx = gsap.context(() => {
      rows.forEach((row) => {
        const reveal = row.querySelector('.reveal-overlay');
        gsap.to(reveal, {
          width: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true,
          }
        });
      });
    }, tableRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-[clamp(80px,10vw,160px)] px-6 max-w-4xl mx-auto" ref={tableRef}>
      <h2 className="text-[clamp(32px,3vw,48px)] font-[300] mb-12 text-primary tracking-[-0.02em]">Tech Specs</h2>
      <div className="border-t border-white/10">
        {specs.map((s, i) => (
          <div key={i} className="spec-row relative border-b border-white/10 py-8 flex flex-col md:flex-row justify-between md:items-baseline">
            <div className="absolute inset-0 bg-black reveal-overlay origin-right right-0 w-full z-10" />
            <span className="text-[#a1a1a6] text-xl font-[300] w-1/2">{s.label}</span>
            <span className="text-primary text-2xl md:text-3xl font-mono tracking-tight font-[300] md:w-1/2 text-left md:text-right mt-2 md:mt-0">{s.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
