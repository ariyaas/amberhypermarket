import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const location = useLocation(); // ✅ detects route changes


  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Offers", path: "/offers" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

// ✅ Scroll to top when route changes or same link clicked
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTop(); // scroll on route change
    setOpen(false); // close mobile menu

    // also listen for "same-page" clicks (like Home → Home)
    window.addEventListener("samePageScroll", scrollToTop);
    return () => window.removeEventListener("samePageScroll", scrollToTop);
  }, [location.pathname]);

  useEffect(() => {
  const handleResize = () => setOpen(false);
  handleResize(); // run once on page load (fixes refresh issue)
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);




  return (
    <nav className="bg-[#231b4c] shadow-lg fixed w-full z-50 top-0 left-0 font-[Poppins] transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-5 md:py-4">
               
        {/* Logo */}
        <Link
  to="/"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }}
  className="flex flex-col ml-0 md:ml-20 leading-tight hover:scale-105 transition-transform duration-300"
>
  <h1 className="text-3xl md:text-4xl font-extrabold text-white font-[Poppins] tracking-wide">
    Ambe<span className="text-yellow-400">r</span>
  </h1>
  <span className="text-sm md:text-base text-gray-300 font-[Poppins] tracking-wide">
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
          // ✅ Always scroll to top smoothly
          window.scrollTo({ top: 0, behavior: "smooth" });
          // ✅ Close mobile menu (even if on Home)
          setOpen(false);
        }}
        className="transition-all duration-300 hover:text-yellow-300"
      >
        {link.name}
      </Link>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
    </li>
  ))}
</ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay (click outside to close) */}
      {/* Overlay behind menu */}
{open && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    onClick={() => setOpen(false)}
  ></div>
)}

{/* Mobile Menu (Slide Right to Left) */}
<div
  className={`
    md:hidden fixed top-0 right-0 h-full w-1/2 bg-[#231b4c] z-50 shadow-xl
    transform transition-transform duration-500 ease-in-out
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button
      onClick={() => setOpen(false)}
      className="text-white hover:text-yellow-400 transition-colors duration-300"
    >
      <X size={28} />
    </button>
  </div>

  {/* Links */}
 <ul className="flex flex-col items-center gap-4 py-6 text-white text-lg font-medium w-full">
  {links.map((link, i) => (
    <li
      key={i}
      className="w-full text-center py-3 hover:bg-yellow-400/20 rounded-md transition-all duration-300"
    >
      <Link
        to={link.path}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setOpen(false);
        }}
        className="block w-full hover:text-yellow-300 transition-colors duration-300"
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



