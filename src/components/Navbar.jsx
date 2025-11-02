import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Offers", path: "/offers" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  /* ✅ Stable callbacks */
  const scrollToTop = useCallback(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  /* ✅ Optimized single effect: scroll + resize throttle */
  useEffect(() => {
    // scroll on route change
    scrollToTop();
    closeMenu();

    // same-page scroll handler
    window.addEventListener("samePageScroll", scrollToTop);

    // throttle resize handler
    let throttleTimer;
    const handleResize = () => {
      if (!throttleTimer) {
        closeMenu();
        throttleTimer = setTimeout(() => (throttleTimer = null), 300);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("samePageScroll", scrollToTop);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollToTop, closeMenu, location.pathname]);

  return (
    <nav className="bg-[#231b4c] fixed top-0 left-0 w-full z-50 shadow-lg font-[Poppins] transition-none">
      <div className="flex justify-between items-center px-6 py-5 md:py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            scrollToTop();
            closeMenu();
          }}
          className="flex flex-col ml-0 md:ml-20 leading-tight hover:text-yellow-400 transition-colors duration-200"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Ambe<span className="text-yellow-400">r</span>
          </h1>
          <span className="text-sm md:text-base text-gray-300 tracking-wide">
            Hyper Market
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-white text-lg font-semibold px-20">
          {links.map((link, i) => (
            <li key={i} className="relative group cursor-pointer">
              <Link
                to={link.path}
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className="transition-all duration-200 hover:text-yellow-300"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-transform duration-200 hover:scale-105"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay (click outside to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-[#231b4c] z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-white hover:text-yellow-400 transition-colors duration-200"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-4 py-6 text-white text-lg font-medium w-full">
          {links.map((link, i) => (
            <li
              key={i}
              className="w-full text-center py-3 hover:bg-yellow-400/20 rounded-md transition-all duration-200"
            >
              <Link
                to={link.path}
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className="block w-full hover:text-yellow-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ✅ Prevent unnecessary re-renders */
export default React.memo(Navbar);