// "use client";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "HTML", level: 95, color: "from-orange-500 to-yellow-400" },
//   { name: "CSS", level: 90, color: "from-blue-500 to-cyan-400" },
//   { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-400" },
//   { name: "React.js", level: 80, color: "from-cyan-400 to-blue-500" },
//   { name: "Next.js", level: 75, color: "from-gray-700 to-black" },
//   { name: "Node.js", level: 70, color: "from-green-400 to-emerald-500" },
//   { name: "MongoDB", level: 65, color: "from-green-600 to-lime-400" },
// ];

// export default function Skills() {
//   return (
//     <section className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
//             My{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
//               Skills
//             </span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">
//             Here are the technologies I’m experienced with and improving every
//             day.
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="space-y-6">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between mb-1">
//                 <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
//                   {skill.name}
//                 </span>
//                 <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
//                   {skill.level}%
//                 </span>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                   className={`h-3 bg-gradient-to-r ${skill.color} rounded-full`}
//                 ></motion.div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const coreSkills = [
  { name: "HTML", level: 95, color: "from-orange-500 to-yellow-400" },
  { name: "CSS", level: 90, color: "from-blue-500 to-cyan-400" },
  { name: "Bootstrap", level: 90, color: "from-indigo-500 to-purple-400" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-400" },
  { name: "React.js", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 75, color: "from-gray-700 to-black" },
];

const circularSkills = [
  { name: "Node.js", level: 70, color: "#16a34a" },
  { name: "MongoDB", level: 65, color: "#10b981" },
  { name: "Firebase", level: 60, color: "#f59e0b" },
  { name: "Tailwind CSS", level: 85, color: "#3b82f6" },
  { name: "Express.js", level: 75, color: "#6b7280" },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Time Management",
  "Creativity",
  "Adaptability",
  "Communication",
];

export default function Skills() {
  return (
    <section className="container py-20 bg-gradient-to-l from-gray-100 to-gray-300 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            A mix of technical expertise, tools, and soft skills that power my
            development journey.
          </p>
        </div>

        {/* CORE SKILLS - Linear Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Core Skills
          </h3>
          <div className="space-y-6 grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {coreSkills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-400 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
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

        {/* CIRCULAR SKILLS - Tools & Frameworks */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Tools & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
            {circularSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-gray-800 dark:bg-gray-800 rounded-full p-3 mb-3 shadow-lg">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      pathColor: skill.color,
                      textColor: "#fff",
                      trailColor: "#374151",
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mt-1">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS - Badges */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full text-sm font-medium shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
