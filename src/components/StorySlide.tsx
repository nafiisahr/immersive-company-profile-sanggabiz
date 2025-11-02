import React from "react";
import { motion, MotionValue } from "framer-motion";

interface StorySlideProps {
  background: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  x?: MotionValue<number>;
  scale?: MotionValue<number> | number;
  opacity?: MotionValue<number> | number;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  offsetRight?: number;
}

const StorySlide: React.FC<StorySlideProps> = ({
  background,
  title,
  subtitle,
  imageSrc,
  x,
  scale,
  opacity,
  style,
  width = "75vw",
  height = "70vh",
  offsetRight = 0,
}) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: "15vh",
        left: `calc(12.5vw + ${offsetRight}px)`,
        width,
        height,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2.5rem",
        borderRadius: 24,
        background,
        border: "1px solid #DBEAFE",
        boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
        overflow: "hidden",
        transformOrigin: "center",
        x,
        scale,
        opacity,
        ...style,
      }}
      whileHover={{
        boxShadow: "0 35px 80px rgba(0,0,0,0.18)",
        y: -5,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "48px",
          height: "100%",
          background: "linear-gradient(to left, rgba(255,255,255,0.85), transparent)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* teks kiri */}
      <div
        style={{
          maxWidth: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "#1E3A8A",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#334155",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* gambar kanan */}
      {imageSrc && (
        <div
          style={{
            width: "40%",
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            zIndex: 1,
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to left, rgba(0,0,0,0.25), transparent)",
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default StorySlide;
