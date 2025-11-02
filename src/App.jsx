import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterMini from "./components/FooterMini";

// ✅ Lazy-load only heavy pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Offers = lazy(() => import("./pages/Offers"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      {/* ✅ Navbar loads instantly (not lazy) */}
      <Navbar />

      {/* ✅ Lazy-load only the routes */}
      <main className="pt-20 min-h-screen">
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
      </main>

      {/* ✅ These load instantly and stay visible */}
      <Footer />

      
      <div className="md:hidden">
        <FooterMini />
      </div>
    </>
  );
}

export default App;
