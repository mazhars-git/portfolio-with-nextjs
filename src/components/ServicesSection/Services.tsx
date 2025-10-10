"use client";
import { motion } from "framer-motion";
import { Code, Palette, Globe, PenTool } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-indigo-500" />,
    title: "Web Development",
    description:
      "I build responsive, high-performance websites and web apps using React, Next.js, and modern web technologies.",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    title: "UI/UX Design",
    description:
      "Designing elegant user interfaces with focus on usability, accessibility, and delightful user experience.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Full Stack Solutions",
    description:
      "From frontend to backend, I develop complete web solutions using Node.js, Express, and MongoDB.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-green-500" />,
    title: "Creative Branding",
    description:
      "I help brands express themselves through custom graphics, logos, and digital design elements.",
  },
];

export default function Services() {
  return (
    <section className="container py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Services
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Here are some of the services I offer to help you build, design, and
          grow your digital presence.
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transform transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
