import { motion } from "framer-motion";
import Lottie from "lottie-react";

// 🪄 Import your 3 Lottie animations
import customerService from "../assets/animations/customerService.json";
import qualityProduct from "../assets/animations/qualityProduct.json";
import companyFlow from "../assets/animations/companyFlow.json";

export default function WhyAmber() {
  const sections = [
    {
      title: "Customer Service",
      desc: `Amber is committed to providing exceptional customer support that goes beyond expectations. 
We believe every shopper deserves personal attention, quick assistance, and a smile. 
Our trained staff ensures your shopping experience remains smooth and enjoyable from start to finish. 
Whether you need product recommendations or help finding something specific, we’re always nearby. 
At Amber, service isn’t just a department — it’s our culture.`,
      animation: customerService,
    },
    {
      title: "Quality Products",
      desc: `We take pride in offering products that meet the highest quality standards. 
From fresh produce to daily essentials, every item on our shelves is carefully selected. 
Amber works only with trusted suppliers to ensure freshness, safety, and reliability. 
We believe our customers deserve nothing less than premium value for their money. 
That’s why you can always shop with confidence at Amber Super Market.`,
      animation: qualityProduct,
    },
    {
      title: "Company Flow",
      desc: `Our efficient company workflow ensures every customer enjoys a seamless experience. 
From inventory management to billing, every process at Amber is designed with you in mind. 
Our staff communicates effectively across departments to deliver top-tier service quickly. 
Technology and teamwork help us maintain accuracy, speed, and convenience. 
We’re continuously improving our system to serve you better every single day.`,
      animation: companyFlow,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-pink-600 mb-3 text-center"
        >
          WHY AMBER
        </motion.h2>

        {/* Subtitle */}
       <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="text-center text-gray-700 text-lg md:text-xl font-medium tracking-wide mb-12"
>
  Discover the <span className="font-semibold text-yellow-500">complete shopping experience</span> —
  all your daily needs, quality products, and great service under one roof.
</motion.p>


        {/* Sections */}
        <div className="flex flex-col gap-16">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Lottie Animation */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Lottie
                  animationData={item.animation}
                  loop
                  autoplay
                  className="w-64 h-64 md:w-80 md:h-80"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">

                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
