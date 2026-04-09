"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export default function ActionReveal() {
  return (
    <section className="bg-black py-32 flex items-center justify-center border-t border-white/5 relative z-10 px-6">
      <TextRevealCard
        text="You know the problem."
        revealText="We know the solution."
      >
        <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tight mb-4">
          Uncover the invisible.
        </h2>
        <p className="text-[#a1a1a6] text-lg max-w-lg mb-8">
          Hover over the card to reveal the hidden truth underneath. It works exactly like the optical passthrough of Spatial Computing.
        </p>
      </TextRevealCard>
    </section>
  );
}
