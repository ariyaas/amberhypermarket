import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
     <Navbar />
      <div className="pt-20">
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
     
      <Footer />
    </>
  );
}

export default App;
