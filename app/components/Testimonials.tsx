import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="py-32 rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 w-full text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
          Loved by creators.<br />
          <span className="text-[#a1a1a6]">Pioneered by you.</span>
        </h2>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It's not just a step forward in VR. It profoundly shifts how we understand computing. The sheer clarity of the glass practically melts the hardware away.",
    name: "Marques Brownlee",
    title: "Tech Reviewer",
  },
  {
    quote:
      "For the first time, I felt like I was physically present in memories that I captured years ago. The depth is absolutely breathtaking and unlike anything else.",
    name: "Justine Ezarik",
    title: "Digital Creator",
  },
  {
    quote: "The interface tracks your eyes seamlessly. By simply looking and tapping your fingers together, you're commanding an entirely spatial OS.",
    name: "Joanna Stern",
    title: "Tech Columnist",
  },
  {
    quote:
      "When I put it on, I practically gasped. The resolution is so intensely high that I could read completely crisp text floating ten feet away.",
    name: "Nilsen Report",
    title: "Technology Analyst",
  },
  {
    quote:
      "It blends the absolute best of digital immersion with grounded physical reality. It's truly the definitive spatial computer.",
    name: "Dieter Bohn",
    title: "Tech Journalist",
  },
];
