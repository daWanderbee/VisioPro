'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(videoRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: true,
            pin: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="h-screen w-full bg-black relative overflow-hidden flex items-center justify-center" ref={containerRef}>
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover transform origin-center"
      >
        <source src="/video/veo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
