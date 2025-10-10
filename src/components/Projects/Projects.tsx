"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 🗂 Project data with category
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Tailwind & Framer Motion.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Web",
    link: "https://your-portfolio-link.com",
    github: "https://github.com/your-username/portfolio",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Modern e-commerce platform with cart and checkout.",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Redux", "Firebase"],
    category: "Web",
    link: "https://your-ecommerce-demo.com",
    github: "https://github.com/your-username/ecommerce",
  },
  {
    id: 3,
    title: "UI Landing Page",
    description: "A clean and modern UI landing page for a SaaS startup.",
    image: "/projects/landing.jpg",
    tech: ["HTML", "CSS", "JS"],
    category: "UI",
    link: "https://your-landing.com",
    github: "https://github.com/your-username/landing",
  },
  {
    id: 4,
    title: "Mobile Task App",
    description: "A simple to-do app with React Native and Expo.",
    image: "/projects/app.jpg",
    tech: ["React Native", "Expo"],
    category: "App",
    link: "https://your-task-app.com",
    github: "https://github.com/your-username/task-app",
  },
];

// 🏷️ Filter Categories
const categories = ["All", "Web", "UI", "App"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // 🧠 Filtered projects
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        {/* 🔘 Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 📦 Project Cards */}
        <motion.div
          layout
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition text-sm font-medium"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 border border-indigo-600 hover:bg-indigo-600 rounded-lg transition text-sm font-medium"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
