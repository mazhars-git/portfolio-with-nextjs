"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="container py-20 bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to work together?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Whether you have a project in mind or just want to say hi, feel free
          to reach out. Let's create something amazing together!
        </motion.p>

        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#contact"
          className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all"
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
}
