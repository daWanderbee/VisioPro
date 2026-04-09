import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Cpu, Eye, Video, Layers, Fingerprint } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black flex flex-col justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left w-full">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
          Technology that disappears.<br />
          <span className="text-[#a1a1a6]">Experience that remains.</span>
        </h2>
        <p className="max-w-2xl text-xl text-[#86868b]">
          A singular piece of three-dimensional glass acts as an optical surface. It brings the digital world directly into your space.
        </p>
      </div>
      <BentoGrid className="w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Spatial Audio Ecosystem",
    description: "Our most advanced Spatial Audio system ever built dual-driver audio pods positional sound into your ear. It actively traces the geometry of your physical room in real-time, matching audio reflections to your environment.",
    icon: <Cpu className="h-10 w-10 text-white mb-6" strokeWidth={1} />,
  },
  {
    title: "Dual Silicon Architecture",
    description: "A monumental breakthrough in wearable performance. The M2 chip delivers extreme standalone power, while the brand-new R1 chip processes high-resolution sensor data instantly to eliminate lag completely.",
    icon: <Layers className="h-10 w-10 text-white mb-6" strokeWidth={1} />,
  },
  {
    title: "Optic ID",
    description: "Flawless biometric authentication using advanced infrared cameras that map your iris, invisible to the user but structurally unhackable.",
    icon: <Fingerprint className="h-10 w-10 text-white mb-6" strokeWidth={1} />,
  },
  {
    title: "23 Million Pixels per eye",
    description: "We fit massive 4K resolution into postage-stamp sized micro-OLED displays. True spectacular volumetric clarity that perfectly blends realities.",
    icon: <Eye className="h-10 w-10 text-white mb-6" strokeWidth={1} />,
  },
  {
    title: "3D Capture",
    description: "Capture profound spatial videos and breathtaking panoramic 3D photos that can be relived forever.",
    icon: <Video className="h-10 w-10 text-white mb-6" strokeWidth={1} />,
  },
];
