// FooterMini.jsx
import { Link } from "react-router-dom";

export default function FooterMini() {
  return (
    <footer className="bg-[#231b4c] text-white py-3 text-center text-sm fixed bottom-0 w-full md:hidden z-50 shadow-lg">
      <div className="flex justify-around items-center text-xl">
        <Link to="/" className="hover:text-yellow-300 transition-colors">🏠</Link>
        <Link to="/products" className="hover:text-yellow-300 transition-colors">🛒</Link>
        <Link to="/offers" className="hover:text-yellow-300 transition-colors">🎁</Link>
        <Link to="/about" className="hover:text-yellow-300 transition-colors">💼</Link>
        <Link to="/contact" className="hover:text-yellow-300 transition-colors">📞</Link>
      </div>
    </footer>
  );
}
