"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      // className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-lg"
    >
      <h2 className="text-4xl font-bold text-white">{count}+</h2>
      <p className="mt-2 text-sm text-gray-300">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-8">
      <div className="max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-2">
        <Counter target={25} label="Projects Completed" />
        <Counter target={15} label="Happy Clients" />
        <Counter target={2} label="Years Experience" />
        <Counter target={10} label="Technologies Used" />
      </div>
    </section>
  );
}
