// src/pages/About.tsx
import React from "react";
import { Users, HeartHandshake, Globe, Instagram, Youtube, Linkedin } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Tim Virtual Profesional",
      desc: "Kami menghadirkan dukungan HR, CS, dan marketing berpengalaman tanpa batas ruang kerja fisik.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-blue-500" />,
      title: "Dampak Sosial Nyata",
      desc: "Memberdayakan perempuan dan penyandang disabilitas untuk berkarya secara digital dari mana saja.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Skalabilitas Global",
      desc: "Sanggabiz membantu bisnis Anda tumbuh lintas wilayah dengan kolaborasi digital yang efisien.",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/sanggabiz",
      label: "Instagram",
      color: "text-pink-500",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "https://www.youtube.com/sanggabiz",
      label: "YouTube",
      color: "text-red-500",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/sanggabiz",
      label: "LinkedIn",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center py-20 px-6">
      {/* HEADER */}
      <div className="max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-4 tracking-tight">
          Tentang Sanggabiz
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Sanggabiz adalah mitra virtual yang membantu bisnis bertransformasi ke arah digital.
          Dengan fokus pada efisiensi, kolaborasi lintas tim, dan dampak sosial yang nyata.
        </p>
      </div>

      {/* GRID FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white border border-blue-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            {/* ICON */}
            <div className="mb-6">{f.icon}</div>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {f.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* SOCIAL MEDIA */}
      <div className="mt-12 flex space-x-6">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-transform duration-300 ${s.color}`}
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default About;
