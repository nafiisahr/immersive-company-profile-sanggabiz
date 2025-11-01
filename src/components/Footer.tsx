import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-t
       border-blue-200 shadow-inner text-center py-5 text-blue-700 backdrop-blur-md"
      style={{
        zIndex: 1000,
      }}
    >
      <p className="text-sm tracking-wide font-medium">
        &copy; {new Date().getFullYear()} <span className="font-semibold">Sanggabiz</span> • Empowering Your Digital Growth 🚀
      </p>
    </footer>
  );
};

export default Footer;
