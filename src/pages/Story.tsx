import React, { useEffect, useState } from "react";
import StorySlide from "../components/StorySlide";
import Lenis from "@studio-freight/lenis";
import { useMotionValue, useTransform } from "framer-motion";
import { CreditCard, HeartHandshake, Activity, Ear } from "lucide-react";

const backgroundColors = [
  "rgba(219, 234, 254, 1.0)", 
  "rgba(230, 230, 255, 1.0)", 
  "rgba(255, 240, 245, 1.0)", 
  "rgba(220, 240, 210, 1.0)", 
];

const slides = [
  {
    background: backgroundColors[0],
    title: "Masalah di Dunia Bisnis",
    subtitle:
      "Banyak bisnis kesulitan menjalankan operasional karena biaya tenaga kerja tinggi, proses rekrutmen rumit, dan manajemen tim jarak jauh yang tidak efisien.",
    imageSrc: "/images/readers.jpeg",
  },
  {
    background: backgroundColors[1],
    title: "Munculnya Ide Sanggabiz",
    subtitle:
      "Kami mendirikan Sanggabiz untuk membantu bisnis beroperasi lebih efisien dengan cara baru — memanfaatkan teknologi, kolaborasi virtual, dan talenta inklusif dari berbagai latar belakang.",
    imageSrc: "/images/transformation.jpeg",
  },
  {
    background: backgroundColors[2],
    title: "Nilai dan Prinsip Kami",
    subtitle:
      "Kami percaya inklusivitas bukan sekadar nilai tambah, tapi fondasi bisnis modern. Tim kami terdiri dari perempuan, penyandang disabilitas, dan talenta global yang berkontribusi penuh dalam setiap proyek.",
    imageSrc: "/images/efficiency.jpeg",
  },
  {
    background: backgroundColors[3],
    title: "Dampak dan Perjalanan",
    subtitle:
      "Sejak berdiri, kami telah membantu lebih dari 100 bisnis menghemat biaya operasional hingga 60% dan membangun sistem kerja jarak jauh yang efektif.",
    imageSrc: "/images/impact-journey.jpeg",
  },
  {
    background: backgroundColors[0],
    title: "Visi ke Depan",
    subtitle:
      "Kami terus berkembang untuk menghadirkan solusi kerja digital yang lebih cerdas, inklusif, dan berkelanjutan. Bergabunglah dalam perjalanan kami menuju masa depan bisnis yang lebih efisien.",
    imageSrc: "/images/future-vision.jpeg",
  },
];

const testimonials = [
  {
    company: "PT Inovasi Teknologi",
    logo: "/images/client1-logo.png",
    text: "Sanggabiz membantu kami mengurangi biaya operasional dengan solusi kerja jarak jauh yang efektif.",
  },
  {
    company: "CV Solusi Digital",
    logo: "/images/client2-logo.png",
    text: "Tim Sanggabiz sangat profesional dan membantu membangun sistem kerja digital yang efisien.",
  },
  {
    company: "PT Kreatif Mandiri",
    logo: "/images/client3-logo.png",
    text: "Kami sangat puas dengan kolaborasi inklusif dan teknologi yang mereka gunakan.",
  },
  {
    company: "PT Global Nusantara",
    logo: "/images/client4-logo.png",
    text: "Sanggabiz telah membantu meningkatkan produktivitas tim kami secara signifikan.",
  },
];

const Story: React.FC = () => {
  const scrollY = useMotionValue(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [vw, setVw] = useState(window.innerWidth);

  const peek = 48;

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
    <>
      {/* Bagian Slide */}
      <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex items-center justify-center overflow-hidden">
        <div style={{ height: `${vh * slides.length}px`, position: "relative", width: "100%" }}>
          {slides.map((slide, i) => {
            const start = i * vh;
            const end = (i + 1) * vh;
            const x = useTransform(scrollY, [start, end], [0, -vw]);
            const layerOffset = i * (peek / 2);

            return (
              <StorySlide
                key={i}
                {...slide}
                x={x}
                width="75vw"
                height="70vh"
                offsetRight={layerOffset}
                style={{
                  zIndex: slides.length - i,
                  border: "1px solid #BFDBFE",
                  borderRadius: 24,
                  boxShadow: "0 15px 45px rgba(0,0,0,0.08)",
                  background: slide.background,
                }}
              />
            );
          })}
        </div>
      </section>

      {/* Bagian Testimoni s*/}
 <section
        style={{
          maxWidth: "1000px",
          margin: "3rem auto 5rem",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1e40af",
            marginBottom: "3rem",
          }}
        >
          What They Say About Sanggabiz
        </h2>

        {testimonials.map(({ company, logo, text }, i) => {
          const backgroundColors = [
            "rgba(219, 234, 254, 0.4)", // biru muda transparan
            "rgba(230, 230, 255, 0.5)", // ungu muda transparan
            "rgba(255, 240, 245, 0.5)", // pink muda transparan
            "rgba(220, 240, 210, 0.5)", // hijau muda transparan
          ];

          const iconColors = [
            "#2563eb", // biru
            "#4c51bf", // ungu
            "#db2777", // pink
            "#16a34a", // hijau
          ];

          const icons = [
            <CreditCard size={32} color={iconColors[0]} />,
            <HeartHandshake size={32} color={iconColors[1]} />,
            <Activity size={32} color={iconColors[2]} />,
            <Ear size={32} color={iconColors[3]} />,
          ];

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "2.5rem",
              }}
            >
              {/* Persentase kiri */}
              <div
                style={{
                  flex: "0 0 120px",
                  textAlign: "right",
                  marginRight: "1.5rem",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    lineHeight: 1.1,
                    color: "#1e40af",
                  }}
                >
                  {["Kasir Pintar", "Kitabisa", "Mosaic Wellness", "AQM Hearing"][i]}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#3b82f6",
                    marginTop: 4,
                    letterSpacing: "0.03em",
                  }}
                >
                  Company
                </div>
              </div>

              {/* Kartu testimoni kanan */}
              <div
                style={{
                  backgroundColor: backgroundColors[i],
                  borderRadius: 12,
                  padding: "1.5rem 2rem",
                  flexGrow: 1,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Kotak ikon */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    padding: 12,
                    flexShrink: 0,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icons[i]}
                </div>

                {/* Teks */}
                <div>
                  <h3
                    style={{
                      color: "#1e40af",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginBottom: 6,
                    }}
                  >
                    {[
                      "Fast & Helpful Collaboration",
                      "Comprehensive Business Solution",
                      "Exceptional Service & Ownership",
                      "Process Improvement & Insights",
                    ][i]}
                  </h3>
                  <p
                    style={{
                      color: "#334155",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                      maxWidth: "600px",
                    }}
                  >
                    {[
                      "Sanggabiz has become a comprehensive business solution, going beyond just manpower. They provide impactful flexibility that drives real results for businesses.",
                      "Working with Sanggabiz has been a pleasure. The standout point is their fast response and genuinely helpful approach. Coordination has never been easier.",
                      "Sanggabiz's service was exceptional! They consistently exceeded expectations, demonstrating high ownership and delivering valuable insights. We look forward to collaborating with them again on future projects.",
                      "We lacked sufficient experience in Customer Servicing, but with Sanggabiz as our sparring partner, we improved processes and systems. Now we have clear SOPs and valuable new insights.",
                    ][i]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Story;