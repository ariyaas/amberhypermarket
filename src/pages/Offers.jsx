import { motion } from "framer-motion";

import fruits from "../assets/optimized/fruits.webp";
import fish from "../assets/optimized/fish.webp";
import dairy from "../assets/optimized/dairy.webp";
import spices from "../assets/optimized/spices.webp";
import bakery from "../assets/optimized/bakery.webp";
import beverages from "../assets/optimized/beverages.webp";
import cleaning from "../assets/optimized/cleaning.webp";
import snacks from "../assets/optimized/snacks.webp";




export default function Offers() {
  const offers = [
    { image: fruits, name: "Fresh Fruits & Vegetables" },
    { image: fish, name: "Fish & Meat" },
    { image: dairy, name: "Dairy & Canned Food" },
    { image: spices, name: "Spices & Condiments" },
    { image: bakery, name: "Bakery Items" },
    { image: beverages, name: "Beverages" },
    { image: cleaning, name: "Cleaning & Household" },
    { image: snacks, name: "Snacks & Packaged Food" },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-12 font-[Poppins] mt-16">
      {/* 🟣 Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-[#231b4c]"
        >
          Our Best Offers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-600 mt-3 text-base md:text-lg"
        >
          Explore the best deals and offers at Amber Hypermarket — quality and savings together!
        </motion.p>
      </div>

      {/* 🟡 Offers Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-all duration-300 cursor-pointer"
          >
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-48 md:h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base md:text-lg font-semibold bg-yellow-500/90 px-4 py-2 rounded-t-md">
                {offer.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
