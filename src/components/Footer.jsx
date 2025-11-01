import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#171c27] text-gray-300 pt-14 pb-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* --- Amber Info --- */}
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-3">
            Ambe<span className="text-yellow-400">r</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Amber Group, P.O Box: 30625, Sharjah - UAE
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> 00971 65366000
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> 00971 65567577
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@amberuae.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="p-2 bg-gray-700/40 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700/40 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700/40 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* --- About Amber --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Amber</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition-colors">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-400 transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Customer Service --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-yellow-400 transition-colors">
                Offers & Promotions
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Others --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Others</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/locations" className="hover:text-yellow-400 transition-colors">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/loyalty" className="hover:text-yellow-400 transition-colors">
                Loyalty Program
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Copy --- */}
      <div className="text-center text-gray-400 text-sm pt-6">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Amber</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
