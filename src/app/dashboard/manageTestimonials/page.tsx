"use client";
import { useState } from "react";

export default function TestimonialsDashboard() {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");

  const handleAdd = () => {
    if (name && role && quote) {
      setTestimonials([...testimonials, { name, role, quote }]);
      setName("");
      setRole("");
      setQuote("");
    }
  };

  const handleDelete = (i) => {
    setTestimonials(testimonials.filter((_, index) => index !== i));
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Manage Testimonials
      </h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role / Position"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Testimonial Message"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Add Testimonial
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow relative"
          >
            <button
              onClick={() => handleDelete(i)}
              className="absolute top-3 right-3 text-red-500 font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {t.name}
            </h3>
            <span className="text-sm text-gray-500">{t.role}</span>
            <p className="text-gray-600 dark:text-gray-300 mt-2 italic">
              {t.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
