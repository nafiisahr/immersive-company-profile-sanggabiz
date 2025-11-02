// src/pages/Services.tsx
import React from "react";
import { Cog, Users, Target } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Operasional Support",
      desc: "Optimalkan alur kerja bisnis Anda — dari administrasi, customer service, hingga automasi operasional agar lebih efisien dan terintegrasi.",
      icon: <Cog className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "HR & Konsultasi",
      desc: "Partner virtual Anda dalam rekrutmen, manajemen kinerja, dan pengembangan SDM berbasis insight dan data real-time.",
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Pelatihan & Coaching",
      desc: "Bangun tim tangguh melalui pelatihan digital, coaching leadership, dan strategi adaptasi teknologi modern.",
      icon: <Target className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center py-20 px-6">
      {/* HEADER */}
      <div className="max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-4 tracking-tight">
          Layanan Sanggabiz
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Kami bantu operasional Anda dengan layanan berbasis hasil. Pilih solusi yang sesuai dengan kebutuhan bisnis Anda.
        </p>
      </div>

      {/* GRID LAYANAN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Efek pola sudut */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent opacity-40 rounded-br-3xl transition-transform duration-500 group-hover:scale-110" />

            {/* ICON */}
            <div className="mb-6">{service.icon}</div>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {service.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* BLOK HARGA & CTA */}
      <div className="mt-16 text-center max-w-3xl px-4">
        <p className="text-gray-700 text-lg mb-6">
          Mulai dari <span className="font-bold text-blue-600">RpX juta/bulan</span> — fleksibel sesuai kebutuhan bisnis Anda.
        </p>

        {/* CTA utama */}
        <button className="text-blue-500 font-medium hover:underline text-lg">
          Konsultasikan Sekarang
        </button>
      </div>
    </section>
  );
};

export default Services;
