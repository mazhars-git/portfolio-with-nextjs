"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-gray-50 dark:bg-gray-900 pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <h1 className="mb-3 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Hi, I’m <span className="text-indigo-600">Mazharul Islam</span>
            </h1>

            {/* Typing Animation */}
            <TypeAnimation
              sequence={[
                "A Web Developer",
                2000,
                "A Designer",
                2000,
                "A Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-xl md:text-2xl font-medium text-blue-900"
            />

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              I’m a web developer who loves building clean, modern & fast
              websites. This is my portfolio where you can explore my projects
              and skills.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Image / illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/hero.jpg" // put your image in /public
                alt="Hero Image"
                fill
                className="object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
