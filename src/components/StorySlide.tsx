// src/components/StorySlide.tsx
import React from "react";
import { motion, MotionValue } from "framer-motion";

interface StorySlideProps {
  background: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  x?: MotionValue<number>;
  scale?: MotionValue<number>;
  opacity?: MotionValue<number>;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
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
}) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: "15vh",
        left: "12.5vw",
        width,
        height,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
        borderRadius: 24,
        background,
        border: "1px solid #DBEAFE", // border biru ala Services
        boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
        overflow: "hidden",
        x,
        scale,
        opacity,
        transition: "transform 0.3s, box-shadow 0.3s", // hover effect smooth
        ...style,
      }}
      whileHover={{ 
        boxShadow: "0 30px 70px rgba(0,0,0,0.18)", 
        y: -5 
      }}
    >
      {/* Teks kiri */}
      <div style={{ maxWidth: "55%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{
          fontSize: "2.25rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "#1F3C88",
          lineHeight: 1.3,
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: "1.125rem",
          color: "#3A4A6B",
          lineHeight: 1.6,
        }}>
          {subtitle}
        </p>
      </div>

      {/* Gambar kanan */}
      {imageSrc && (
        <div style={{
          width: "40%",
          height: "100%",
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        }}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to left, rgba(0,0,0,0.25), transparent)",
          }} />
        </div>
      )}

      {/* Pola sudut ala Services */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "5rem",
        height: "5rem",
        borderTopRightRadius: 24,
        background: "linear-gradient(to bottom left, #DBEAFE, transparent)",
        opacity: 0.4,
      }} />
    </motion.div>
  );
};

export default StorySlide;
