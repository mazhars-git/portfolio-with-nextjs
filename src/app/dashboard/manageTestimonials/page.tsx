"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function ManageTestimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, Example Inc.",
      message:
        "Working with you was an amazing experience! Highly recommended.",
      image: "",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    designation: "",
    message: "",
    image: "",
  });
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // ➕ Add
  const handleAdd = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, { id: Date.now(), ...newTestimonial }]);
    setNewTestimonial({ name: "", designation: "", message: "", image: "" });
    setPreviewImage("");
    setIsAddModalOpen(false);
  };

  // ✏️ Edit
  const handleEdit = (item) => {
    setEditingTestimonial(item);
    setPreviewImage(item.image);
    setIsEditModalOpen(true);
  };

  // 💾 Update
  const handleUpdate = (e) => {
    e.preventDefault();
    setTestimonials(
      testimonials.map((t) =>
        t.id === editingTestimonial.id ? editingTestimonial : t
      )
    );
    setIsEditModalOpen(false);
    setEditingTestimonial(null);
    setPreviewImage("");
  };

  // 🗑️ Delete
  const handleDelete = (id) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  };

  // 🖼️ Preview
  const handleImageChange = (e, setState, state) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setPreviewImage(imgUrl);
      setState({ ...state, image: imgUrl });
    }
  };

  return (
    <div className="p-6 flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">💬 Manage Testimonials</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          <Plus size={18} />
          Add Testimonial
        </button>
      </div>

      {/* Testimonials List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md border overflow-hidden p-4 flex flex-col justify-between"
          >
            <div>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover mb-3"
                />
              )}
              <h3 className="text-lg font-semibold text-center">{item.name}</h3>
              <p className="text-sm text-gray-600 text-center">
                {item.designation}
              </p>
              <p className="text-sm text-gray-700 mt-2 text-center">
                {item.message}
              </p>
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <button
                onClick={() => handleEdit(item)}
                className="flex items-center gap-1 text-sm bg-yellow-400 px-2 py-1 rounded text-white hover:bg-yellow-500"
              >
                <Pencil size={14} /> Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="flex items-center gap-1 text-sm bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ADD MODAL */}
      <AnimatePresence>
        {isAddModalOpen && (
          <Modal
            onClose={() => setIsAddModalOpen(false)}
            title="➕ Add Testimonial"
          >
            <form onSubmit={handleAdd} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Designation"
                value={newTestimonial.designation}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    designation: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                value={newTestimonial.message}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    message: e.target.value,
                  })
                }
                className="w-full p-2 border rounded h-24"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(e, setNewTestimonial, newTestimonial)
                }
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 rounded-full w-20 h-20 object-cover mx-auto"
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
        {isEditModalOpen && editingTestimonial && (
          <Modal
            onClose={() => setIsEditModalOpen(false)}
            title="✏️ Edit Testimonial"
          >
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                value={editingTestimonial.name}
                onChange={(e) =>
                  setEditingTestimonial({
                    ...editingTestimonial,
                    name: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                value={editingTestimonial.designation}
                onChange={(e) =>
                  setEditingTestimonial({
                    ...editingTestimonial,
                    designation: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
              <textarea
                value={editingTestimonial.message}
                onChange={(e) =>
                  setEditingTestimonial({
                    ...editingTestimonial,
                    message: e.target.value,
                  })
                }
                className="w-full p-2 border rounded h-24"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(
                    e,
                    setEditingTestimonial,
                    editingTestimonial
                  )
                }
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 rounded-full w-20 h-20 object-cover mx-auto"
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
