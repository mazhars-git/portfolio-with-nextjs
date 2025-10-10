// "use client";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Sarah Ahmed",
//     role: "UI/UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
//     quote:
//       "Working with Mazharul was an amazing experience! His attention to detail and problem-solving skills helped us deliver our project perfectly on time.",
//   },
//   {
//     name: "David Kim",
//     role: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
//     quote:
//       "A very talented developer with a deep understanding of React and Next.js. His work quality and communication were exceptional.",
//   },
//   {
//     name: "Aisha Rahman",
//     role: "Digital Marketer",
//     image:
//       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80",
//     quote:
//       "He transformed our ideas into a functional, beautiful website. Truly creative and professional!",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="container py-20 bg-gradient-to-b from-gray-300 to-blue-600 dark:from-gray-900 dark:to-gray-950">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
//         >
//           What People{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
//             Say About Me
//           </span>
//         </motion.h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
//           Here are some kind words from people I’ve worked with — clients,
//           collaborators, and team members.
//         </p>

//         {/* Testimonials Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testi, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all"
//             >
//               <img
//                 src={testi.image}
//                 alt={testi.name}
//                 className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-indigo-500"
//               />
//               <p className="text-gray-600 dark:text-gray-300 italic mb-4">
//                 “{testi.quote}”
//               </p>
//               <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 {testi.name}
//               </h4>
//               <span className="text-sm text-gray-500 dark:text-gray-400">
//                 {testi.role}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
    quote:
      "Working with Mazharul was an amazing experience! His attention to detail and problem-solving skills helped us deliver our project perfectly on time.",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    quote:
      "A very talented developer with a deep understanding of React and Next.js. His work quality and communication were exceptional.",
  },
  {
    name: "Aisha Rahman",
    role: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80",
    quote:
      "He transformed our ideas into a functional, beautiful website. Truly creative and professional!",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container py-20 bg-gradient-to-r from-sky-100 to-sky-300 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          What People{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Say About Me
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some kind words from people I’ve worked with — clients,
          collaborators, and team members.
        </p>

        <div className="relative h-80">
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mx-4"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-indigo-500"
              />
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                “{testimonials[index].quote}”
              </p>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {testimonials[index].name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index
                    ? "bg-indigo-500 dark:bg-pink-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
