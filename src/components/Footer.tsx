import React from "react";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/sanggabiz",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/sanggabiz",
      label: "YouTube",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/sanggabiz",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-t border-blue-200 shadow-inner backdrop-blur-md"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6">
        {/* Copyright */}
        <p className="text-sm tracking-wide font-medium text-blue-700">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Sanggabiz</span> • Empowering Your Digital Growth 🚀
        </p>

        {/* Social Media */}
        <div className="flex space-x-4">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
