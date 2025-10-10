"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, color: "from-orange-500 to-yellow-400" },
  { name: "CSS", level: 90, color: "from-blue-500 to-cyan-400" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-400" },
  { name: "React.js", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 75, color: "from-gray-700 to-black" },
  { name: "Node.js", level: 70, color: "from-green-400 to-emerald-500" },
  { name: "MongoDB", level: 65, color: "from-green-600 to-lime-400" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Here are the technologies I’m experienced with and improving every
            day.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={`h-3 bg-gradient-to-r ${skill.color} rounded-full`}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
