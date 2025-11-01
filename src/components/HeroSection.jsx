import { useEffect, useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";



const slides = [
  {
    image: img1,
    text: "Welcome to Amber Hyper Market",
    subText: "Fresh groceries, unbeatable offers every day!",
  },
  {
    image: img2,
    text: "Quality Products You Can Trust",
    subText: "Only the best for your family.",
  },
  {
    image: img3,
    text: "Special Discounts & Weekend Deals",
    subText: "Save more when you shop with Amber!",
  },
   {
    image: img4,
    text: "Visit Our Store Today!",
    subText: "Enjoy the ultimate shopping experience with Amber Super Market.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="relative w-full h-[45vh] md:h-[75vh] overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          {/* Text */}
          <div className="absolute left-4 md:left-24 top-[70%] md:top-[60%] -translate-y-1/2 text-white">
            <h2 className="text-2xl md:text-6xl font-bold  animate-fade-in mb-1 md:mb-">
              {slide.text}
            </h2>
            <p className="  text-lg md:text-2xl opacity-90 animate-slide-up font-bold  mt-1 md:mt-2">
              {slide.subText}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-white/60"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
}
