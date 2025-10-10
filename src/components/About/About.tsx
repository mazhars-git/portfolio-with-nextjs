"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Profile Photo"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Hi! I’m{" "}
            <span className="font-semibold text-indigo-600">[Your Name]</span>,
            a passionate <span className="font-semibold">Web Developer</span>{" "}
            and creative thinker based in Bangladesh. I love building
            responsive, user-friendly applications with modern tools like
            <span className="font-semibold">
              {" "}
              Next.js, React, and Tailwind CSS
            </span>
            .
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            My goal is to craft clean, efficient, and accessible web solutions
            that make a difference. I also enjoy teaching and helping others
            learn programming and design.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Next.js", "React", "Tailwind CSS", "Node.js", "Firebase"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              href="#projects"
              className="px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="/cv.pdf"
              target="_blank"
              className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
