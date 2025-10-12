"use client";
import { useState } from "react";

export default function BlogsDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (title && desc) {
      setBlogs([...blogs, { title, description: desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const handleDelete = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Manage Blogs
      </h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Blog Description"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Add Blog
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog, i) => (
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
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
