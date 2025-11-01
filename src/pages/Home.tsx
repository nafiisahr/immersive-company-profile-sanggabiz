import React from "react";
import { Link } from "react-router-dom";

// 10 logo perusahaan
const partnerLogos = [
  "/logos/company1.png",
  "/logos/company2.png",
  "/logos/company3.png",
  "/logos/company4.png",
  "/logos/company5.png",
  "/logos/company6.png",
  "/logos/company7.png",
  "/logos/company8.png",
  "/logos/company9.png",
  "/logos/company10.png",
];

export default function Home() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-6">
          Selamat Datang di Sanggabiz
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl">
          Transformasi bisnis Anda dengan digitalisasi, efisiensi, dan pengalaman tim yang terintegrasi.
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            to="/story"
            className="px-8 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
          >
            Lihat Perjalanan
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 bg-white text-blue-400 font-semibold rounded-lg shadow-md border border-blue-400 hover:bg-blue-50 transition-all duration-300"
          >
            Layanan Kami
          </Link>
        </div>
      </div>

      {/* Partner Logo Animasi */}
      <section className="absolute bottom-[2cm] w-full flex flex-col items-center px-6">
        <h2 className="text-xl md:text-xl font-normal text-blue-300 mb-6">
          Trusted by
        </h2>

        {/* Frame panjang di belakang logo */}
        <div className="relative w-full h-12 md:h-14 overflow-hidden">
          {/* Background frame */}
          <div className="absolute inset-0 bg-[#F0F4FE] rounded-lg"></div>

          {/* Logo scrolling */}
          <div className="absolute top-1/2 left-0 w-full flex animate-marquee -translate-y-1/2">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-8 md:h-10 object-contain mx-6"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tailwind CSS animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: calc(200%);
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
