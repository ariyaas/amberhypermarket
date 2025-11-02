import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterMini from "./components/FooterMini";

// 💡 Lazy-load all heavy pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Offers = lazy(() => import("./pages/Offers"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* ✅ Wrap Routes inside Suspense */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-400"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
       {/* Show mini footer only on mobile */}
      <div className="md:hidden">
        <FooterMini />
      </div>
    </>
  );
}

export default App;
