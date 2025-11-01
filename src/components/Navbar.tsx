import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Story", path: "/story" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">
          Sanggabiz
        </h1>
        <div className="flex gap-8 text-gray-600">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-all duration-300 ${
                  isActive
                    ? "text-blue-500 after:w-full"
                    : "hover:text-blue-400"
                } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
