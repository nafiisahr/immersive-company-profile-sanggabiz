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
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center -translate-y-12">
        {/* H1 dengan bendera Indonesia */}
        <h1 className="text-2xl md:text-5xl font-bold text-blue-700 mb-6">
          Unlock Your Business Potential with
        </h1>
        <h1 className="text-2xl md:text-5xl font-bold text-blue-500 mb-6">
          Indonesia’s Best Talent
        </h1>

        {/* H2 deskripsi Sanggabiz */}
        <p className="text-lg md:text-xl text-gray-700 mb-5 max-w-3xl leading-relaxed">
          Sanggabiz connects your business with Indonesia’s top professionals, delivering efficient, integrated operational, HR, and support solutions to drive growth
        </p>

        {/* H3 dengan profil talent */}
        <div className="flex items-center mb-12">
          <img
            src="/images/profile1.jpeg"
            alt="Talent 1"
            className="w-8 h-8 rounded-full object-cover border-2 border-blue-200"
          />
          <img
            src="/images/profile2.jpeg"
            alt="Talent 2"
            className="-ml-3 w-8 h-8 rounded-full object-cover border-2 border-blue-200"
          />
          <img
            src="/images/profile3.jpeg"
            alt="Talent 3"
            className="-ml-3 w-8 h-8 rounded-full object-cover border-2 border-blue-200"
          />
          <span className="text-blue-600 font-semibold ml-4">
            100+ Specialist Talents Ready to Drive Your Business Success
          </span>
        </div>

        <div className="flex gap-6 flex-wrap justify-center">
          <button className="px-8 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
            Consultation Now
          </button>

          <Link
            to="/services"
            className="px-8 py-3 bg-white text-blue-400 font-semibold rounded-lg shadow-md border border-blue-400 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
            Our Services
          </Link>
        </div>
      </div>

      {/* Partner Logo Animasi */}
      <section className="absolute bottom-[2cm] w-full flex flex-col items-center px-6">
        <h2 className="text-xl md:text-xl font-normal text-blue-400 mb-1">
          Backed by Leading Brands
        </h2>

        <div className="relative w-full h-12 md:h-14 overflow-hidden">
          <div className="absolute inset-0 bg-[#F0F4FE] rounded-lg"></div>
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
