"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How I Built My Portfolio",
      description: "Step by step guide on how I built my personal portfolio.",
      image: "",
      content: "This is a demo blog content.",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
  });
  const [editingBlog, setEditingBlog] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // 🆕 Add Blog
  const handleAddBlog = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { id: Date.now(), ...newBlog }]);
    setNewBlog({ title: "", description: "", image: "", content: "" });
    setPreviewImage("");
    setIsAddModalOpen(false);
  };

  // 📝 Edit Blog Modal
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setPreviewImage(blog.image);
    setIsEditModalOpen(true);
  };

  // 💾 Update Blog
  const handleUpdateBlog = (e) => {
    e.preventDefault();
    setBlogs(blogs.map((b) => (b.id === editingBlog.id ? editingBlog : b)));
    setIsEditModalOpen(false);
    setEditingBlog(null);
    setPreviewImage("");
  };

  // 🗑️ Delete Blog
  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  // 🖼️ Image Preview
  const handleImageChange = (e, setBlogState, blogState) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setPreviewImage(imgUrl);
      setBlogState({ ...blogState, image: imgUrl });
    }
  };

  return (
    <div className="p-6 flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📰 Manage Blogs</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          <Plus size={18} />
          Add Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md border overflow-hidden"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600 my-2">{blog.description}</p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex items-center gap-1 text-sm bg-yellow-400 px-2 py-1 rounded text-white hover:bg-yellow-500"
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="flex items-center gap-1 text-sm bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ADD MODAL */}
      <AnimatePresence>
        {isAddModalOpen && (
          <Modal
            onClose={() => setIsAddModalOpen(false)}
            title="➕ Add New Blog"
          >
            <form onSubmit={handleAddBlog} className="space-y-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Short Description"
                value={newBlog.description}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, description: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Blog Content"
                value={newBlog.content}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                className="w-full p-2 border rounded h-28"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setNewBlog, newBlog)}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 rounded-lg"
                />
              )}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>

      {/* EDIT MODAL */}
      <AnimatePresence>
        {isEditModalOpen && editingBlog && (
          <Modal onClose={() => setIsEditModalOpen(false)} title="✏️ Edit Blog">
            <form onSubmit={handleUpdateBlog} className="space-y-4">
              <input
                type="text"
                value={editingBlog.title}
                onChange={(e) =>
                  setEditingBlog({ ...editingBlog, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                value={editingBlog.description}
                onChange={(e) =>
                  setEditingBlog({
                    ...editingBlog,
                    description: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
              <textarea
                value={editingBlog.content}
                onChange={(e) =>
                  setEditingBlog({ ...editingBlog, content: e.target.value })
                }
                className="w-full p-2 border rounded h-28"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(e, setEditingBlog, editingBlog)
                }
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 rounded-lg"
                />
              )}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Update
                </button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------- Modal Component ------------ */
function Modal({ children, onClose, title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}
