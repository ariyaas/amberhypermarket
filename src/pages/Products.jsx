import { motion } from "framer-motion";

import fruits from "../assets/optimized/fruits.webp";
import fish from "../assets/optimized/fish.webp";
import dairy from "../assets/optimized/dairy.webp";
// import spices from "../assets/optimized/spices.webp";
import bakery from "../assets/optimized/bakery.webp";
import beverages from "../assets/optimized/beverages.webp";
import cleaning from "../assets/optimized/cleaning.webp";
// import snacks from "../assets/optimized/snacks.webp";
export default function Products() {
  const products = [
    {
      image: fruits,
      name: "Fresh Fruits & Vegetables",
      desc: "Experience the goodness of nature with our fresh fruits and vegetables, sourced daily from trusted farms to ensure maximum freshness and nutrition. Amber guarantees the best quality at the best prices for your family’s health.",
    },
    {
      image: fish,
      name: "Fish & Meat",
      desc: "From ocean to table — we provide premium quality fish and meat that are fresh, hygienically packed, and full of natural flavor. Perfectly selected cuts for your everyday meals or special occasions.",
    },
    {
      image: dairy,
      name: "Dairy & Canned Food",
      desc: "Amber offers a wide range of dairy and canned food products, combining taste and quality. Enjoy creamy dairy items and reliable canned goods that make cooking faster and healthier.",
    },
    {
      image: bakery,
      name: "Bakery & Confectionery",
      desc: "Indulge in freshly baked bread, pastries, and cakes made from the finest ingredients. Whether it’s breakfast or dessert, Amber’s bakery section always satisfies your cravings.",
    },
    {
      image: beverages,
      name: "Beverages",
      desc: "Stay refreshed with our collection of beverages — juices, soft drinks, and health drinks. Perfect for family gatherings, parties, and everyday enjoyment.",
    },
    {
      image: cleaning,
      name: "Cleaning & Household",
      desc: "Keep your home clean and sparkling with our trusted cleaning and household products. Quality you can depend on — because your home deserves the best care.",
    },
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
          Explore Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-600 mt-3 text-base md:text-lg"
        >
          Discover freshness, quality, and unbeatable value — everything you need under one roof.
        </motion.p>
      </div>

      {/* 🛒 Product Rows */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {products.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 🖼️ Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-1/2 h-72 md:h-[420px] object-cover rounded-2xl shadow-lg"
            />

            {/* 📜 Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#231b4c] mb-4">
                {item.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                {item.desc}
              </p>
              <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-[#231b4c] font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#231b4c] mb-4">
          Amber Hypermarket — Where Quality Meets Trust
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg max-w-3xl mx-auto">
          Our promise is simple — to deliver the best products at the best prices. 
          Visit your nearest Amber Hypermarket today and enjoy a shopping experience like never before.
        </p>
        <a
          href="/offers"
          className="bg-yellow-400 hover:bg-yellow-500 text-[#231b4c] font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Explore Offers
        </a>
      </motion.div>
    </section>
  );
}
