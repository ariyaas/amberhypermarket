import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import WhyAmber from "../components/WhyAmber"; // ✅ reuse your existing section
import aboutImg from "../assets/optimized/notnow.webp"; // 🆕 optimized image import

export default function About() {
  return (
    <section className="bg-gray-50 font-[Poppins] text-gray-800">
      {/* 🟣 Header */}
      <div className="bg-[#231b4c] text-white py-16 px-6 text-center mt-16 md:mt-20">


        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold"
        >
          About Amber Hypermarket
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg text-gray-200"
        >
          Your trusted destination for all your shopping needs — quality, variety, and value under one roof.
        </motion.p>
      </div>

      {/* 🟡 Company Story */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6 md:px-12 items-center">
        <motion.img
          src={aboutImg}
          alt="About Amber"
          className="rounded-2xl shadow-md object-cover w-full h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#231b4c] mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Amber Hypermarket started with a vision — to bring quality products, great prices, and an exceptional shopping experience to every customer. 
            With multiple branches across the UAE, Amber continues to grow as a name families trust.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 text-justify">
            From fresh groceries to lifestyle essentials, we ensure our customers find everything they need under one roof — always fresh, always reliable.
          </p>
        </motion.div>
      </div>

      {/* 💛 Mission / Vision / Values */}
      <div className="bg-white py-14 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-[#231b4c] mb-10">
          Our Promise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              icon: <Heart className="text-yellow-500 w-10 h-10 mx-auto mb-3" />,
              title: "Customer Care",
              desc: "We prioritize your happiness with exceptional service and support every day.",
            },
            {
              icon: <ShoppingBag className="text-yellow-500 w-10 h-10 mx-auto mb-3" />,
              title: "Quality Products",
              desc: "Every product is chosen with care to ensure freshness, quality, and reliability.",
            },
            {
              icon: <Star className="text-yellow-500 w-10 h-10 mx-auto mb-3" />,
              title: "Commitment to Excellence",
              desc: "We constantly strive to enhance your shopping experience and exceed expectations.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg p-6 transition-all duration-300"
            >
              {item.icon}
              <h3 className="font-semibold text-lg text-[#231b4c] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 Why Amber Section */}
      <WhyAmber />

      {/* 🚀 CTA */}
      <div className="text-center py-16 bg-[#231b4c] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Experience the Amber Difference
        </motion.h2>
        <p className="text-gray-300 mb-8 text-lg">
          Visit your nearest Amber Hypermarket today — where quality meets affordability.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-[#231b4c] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
