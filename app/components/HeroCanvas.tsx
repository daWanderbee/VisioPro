'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const frameCount = 240;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const currentFrame = (index: number) => 
    `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || !containerRef.current) return;

    let loaded = 0;

    const render = (img: HTMLImageElement) => {
      if (!img) return;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (imagesRef.current.length > 0) {
        render(imagesRef.current[0]);
      }
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loaded++;
        if (loaded === 1 || i === 1) render(img);
      };
      imagesRef.current.push(img);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const frameIndex = Math.min(
              frameCount - 1,
              Math.floor(self.progress * frameCount)
            );
            if (imagesRef.current[frameIndex]) {
              render(imagesRef.current[frameIndex]);
            }
          }
        }
      });

      if (videoRef.current) {
        tl.fromTo(videoRef.current,
          { opacity: 1 },
          { opacity: 0, ease: 'none', duration: 0.266 },
          0
        );
      }

      if (textRef.current) {
        tl.fromTo(textRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, ease: 'power1.out', duration: 0.266 },
          0.60
        );

        tl.to(textRef.current,
          { opacity: 0, y: -40, ease: 'power1.in', duration: 0.07 },
          0.93
        );
      }

    }, containerRef);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0"
      >
        <source src="/video/veo.mp4" type="video/mp4" />
      </video>
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-10"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-6">
        <div ref={textRef} className="flex flex-col items-center justify-center">
          <h1 className="text-[clamp(48px,8vw,110px)] font-[500] leading-[1.05] tracking-[-0.04em] text-white drop-shadow-2xl">
            Welcome to the era of <br className="hidden md:block" /> spatial computing.
          </h1>
          <p className="mt-8 text-[#a1a1a6] text-[clamp(20px,2vw,28px)] font-[400] tracking-[-0.01em] max-w-2xl drop-shadow-lg">
            You've never seen everything like this before.
          </p>
        </div>
      </div>
    </section>
  );
}
