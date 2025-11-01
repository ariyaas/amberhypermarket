import { useEffect, useState, useRef } from "react";
import { MapPin, UserRound, Smile } from "lucide-react";

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <MapPin className="w-8 h-8 text-yellow-500" />,
      title: "Locations in UAE",
      number: 6,
      desc: "Amber is now open at select Target locations.",
    },
    {
      icon: <UserRound className="w-8 h-8 text-yellow-500" />,
      title: "Sales Assistants",
      number: 500,
      desc: "We are happy to assist our customers.",
    },
    {
      icon: <Smile className="w-8 h-8 text-yellow-500" />,
      title: "Happy Customers",
      number: 20000,
      desc: "We believe in customer satisfaction.",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 🧠 Run only once
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation (runs once)
  useEffect(() => {
    if (visible) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000; // total animation time
        const steps = 50;
        const increment = Math.ceil(end / steps);
        const stepTime = duration / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer); // ✅ stop here
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = start;
            return updated;
          });
        }, stepTime);
      });
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-8 md:py-14">
     <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
           className="flex flex-col items-center gap-2 p-6 md:p-10 bg-white rounded-xl shadow-sm 
hover:shadow-lg hover:bg-yellow-50 active:bg-yellow-100 
transition-all duration-500 transform hover:-translate-y-1 active:scale-95"



          >
            <div className="flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <h3 className="font-bold text-xl md:text-2xl text-gray-800">
              {counts[index].toLocaleString()}+
            </h3>
            <h4 className="font-semibold text-base md:text-lg text-gray-700">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
