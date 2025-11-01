// src/pages/Story.tsx
import React, { useEffect, useState } from "react";
import StorySlide from "../components/StorySlide";
import Lenis from "@studio-freight/lenis";
import { useMotionValue, useTransform } from "framer-motion";

const slides = [
  {
    background: "linear-gradient(to bottom, #d4dff8, #ffffff)", 
    title: "Kekacauan Operasional",
    subtitle: "Bisnis sering kewalahan, HR, CS, dan marketing berjalan sendiri-sendiri.",
    imageSrc: "/images/readers.jpeg",
  },
  {
    background: "linear-gradient(to bottom, #edebff, #ffffff)", 
    title: "Transformasi Bisnis",
    subtitle: "Proses mulai terintegrasi, efisiensi meningkat, chaos berkurang.",
    imageSrc: "/images/transformation.jpeg",
  },
  {
    background: "linear-gradient(to bottom, #FEF3C7, #ffffff)", 
    title: "Efisiensi Maksimal",
    subtitle: "Bisnis berjalan lancar, tim fokus, pelanggan puas.",
    imageSrc: "/images/efficiency.jpeg",
  },
];

const Story: React.FC = () => {
  const scrollY = useMotionValue(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setVh(window.innerHeight);
      setVw(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => t, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }: { scroll: number }) => scrollY.set(scroll));
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center py-20 px-6">
      <div style={{ height: `${vh * slides.length}px`, position: "relative", width: "100%" }}>
        {slides.map((slide, i) => {
          const start = i * vh;
          const end = (i + 1) * vh;

          const x = useTransform(scrollY, [start, end], [0, -vw]);
          const scale = useTransform(scrollY, [start, end], [1, 1]);
          const zIndex = slides.length - i;

          return (
            <StorySlide
              key={i}
              {...slide}
              x={x}
              scale={scale}
              opacity={1}
              width="75vw"
              height="70vh"
              style={{
                zIndex,
                border: "1px solid #DBEAFE",
                boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
                borderRadius: 20,
                background: slide.background,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Story;
