"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsDashboard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (title.trim() && desc.trim()) {
      setProjects([...projects, { title, description: desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Manage Projects
      </h2>

      {/* Add Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Project Description"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow relative"
          >
            <button
              onClick={() => handleDelete(i)}
              className="absolute top-3 right-3 text-red-500 font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
