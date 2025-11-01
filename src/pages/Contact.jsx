import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
// import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  // ✅ Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔹 Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // 🔹 Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY"   // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong, please try again!");
        }
      );
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-20 font-[Poppins]">
      {/* 🟣 Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#231b4c]">
          Get in Touch
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          We’d love to hear from you! Whether you have questions, feedback, or need help — we’re here for you.
        </p>
      </motion.div>

      {/* 🟡 Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <Phone className="mx-auto text-yellow-500 w-8 h-8 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
          <p className="text-gray-600 mt-2">+971 65366000</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <Mail className="mx-auto text-yellow-500 w-8 h-8 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800">Email</h3>
          <p className="text-gray-600 mt-2">info@amberuae.com</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <MapPin className="mx-auto text-yellow-500 w-8 h-8 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800">Address</h3>
          <p className="text-gray-600 mt-2">Amber Group, Sharjah - UAE</p>
        </motion.div>
      </div>

      {/* 📝 Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-lg mt-6 focus:outline-none focus:border-yellow-400"
        ></textarea>

        <button
          type="submit"
          className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-[#231b4c] font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* 🗺️ Google Map */}
      <div className="mt-16">
        <iframe
          title="Amber Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.503066978757!2d55.42093127511875!3d25.175679977720374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b0d4b3a9dcb%3A0x2d07f73d8d24ce05!2sAmber%20Supermarket!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
