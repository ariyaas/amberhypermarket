import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// 🛒 Product images (replace with your actual file paths)
import fruits from "../assets/fruits.jpg";
import fish from "../assets/fish.jpg";
import dairy from "../assets/dairy.jpg";
import spices from "../assets/spices.jpg";
import bakery from "../assets/bakery.jpg";
import beverages from "../assets/beverages.jpg";
import cleaning from "../assets/cleaning.jpg"; // 🆕 new
import snacks from "../assets/snacks.jpg";     // 🆕 new

const products = [
  { image: fruits, name: "Fresh Fruits & Vegetables" },
  { image: fish, name: "Fish & Meat" },
  { image: dairy, name: "Dairy & Canned Food" },
  { image: spices, name: "Spices & Condiments" },
  { image: bakery, name: "Bakery Items" },
  { image: beverages, name: "Beverages" },
  { image: cleaning, name: "Cleaning & Household" },
  { image: snacks, name: "Snacks & Packaged Food" },
];

export default function ShoppingExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-10 md:py-16 px-4 md:px-12 font-[Poppins]"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold text-pink-600 mb-4">
        SHOPPING EXPERIENCE
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore a variety of high-quality products available at Amber
        Hypermarket — everything from fresh produce to daily essentials.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={
              animate
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 40, scale: 0.95 }
            }
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 md:h-[32rem] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white text-base md:text-xl font-semibold text-center px-2">
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
