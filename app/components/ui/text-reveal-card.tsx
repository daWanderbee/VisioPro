"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      setLeft(cardRef.current.getBoundingClientRect().left);
      setLocalWidth(cardRef.current.getBoundingClientRect().width);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={twMerge(
        "bg-[#111111] border border-white/10 w-full max-w-5xl rounded-3xl p-10 md:p-16 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-48 md:h-64 relative flex items-center overflow-hidden">
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-[#111111] z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(255,255,255,0.4)",
            }}
            className="text-white text-5xl md:text-[80px] font-bold py-10 tracking-tighter"
          >
            {revealText}
          </p>
        </motion.div>
        
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: isMouseOver ? 3 : 0,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-full w-[4px] bg-gradient-to-b from-transparent via-white to-transparent absolute z-50 will-change-transform shadow-[0_0_20px_ rgba(255,255,255,0.8)]"
        ></motion.div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-[#333333] text-5xl md:text-[80px] font-bold py-10 tracking-tighter mix-blend-difference">
            {text}
          </p>
          <Stars />
        </div>
      </div>
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(60)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};
