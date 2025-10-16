"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-white/20"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-sky-800 to-indigo-400 text-white p-8 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-100 mb-6">
            Have a question, project idea, or just want to say hi? Fill out the
            form and I'll get back to you as soon as possible.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <span className="p-2 bg-white/20 rounded-full">📍</span>
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="p-2 bg-white/20 rounded-full">📞</span>
              <span>+880 123 456 789</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="p-2 bg-white/20 rounded-full">✉️</span>
              <span>hello@example.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8"
        >
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been sent.");
            }}
          >
            <div>
              <label className="block mb-1 text-white font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-white font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-white font-medium">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
