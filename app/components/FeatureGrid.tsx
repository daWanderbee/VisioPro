'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: 'Incredible clarity', desc: 'Custom micro-OLED displays feature 23 million pixels, delivering more resolution than a 4K TV to each eye for stunning, lifelike clarity.' },
  { title: 'Spatial Audio', desc: 'The most advanced audio system ever developed traces the acoustics of your physical surroundings, delivering directional sound that perfectly matches the digital objects in your space.' },
  { title: 'Responsive Design', desc: 'A completely new operating system controlled entirely by your eyes, hands, and voice. It maps the room dynamically to let apps breathe and adapt naturally.' },
  { title: 'True Black immersion', desc: 'Infinite contrast ratio completely isolates light bleeds, making the boundaries of the digital world dissolve flawlessly into pure darkness.' },
  { title: 'Aerospace-grade', desc: 'Crafted from custom aluminum alloys and incredibly light structural plastics, the chassis curves perfectly to match the precise contours of the human face.' },
  { title: 'Seamless integration', desc: 'VisioPro integrates instantly with your Mac. A simple glance transforms your laptop into a massive, private 4K display hovering seamlessly in midair.' },
];

export default function FeatureGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.feature-card');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(cards, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-[clamp(80px,10vw,160px)] px-6 max-w-7xl mx-auto" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div 
            key={i} 
            className="feature-card bg-[#0b0b0b] p-8 rounded-[4px] border border-white/5 flex flex-col justify-end min-h-[300px]"
          >
            <div>
              <h3 className="text-2xl font-[500] text-primary">{f.title}</h3>
              <p className="text-[#a1a1a6] text-[clamp(16px,1.2vw,18px)] mt-2 font-[300]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
