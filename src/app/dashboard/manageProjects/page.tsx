"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function ManageProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js",
      url: "https://myportfolio.com",
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "An online store with cart & checkout",
      url: "https://shopapp.com",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    url: "",
  });
  const [editingProject, setEditingProject] = useState(null);

  // Add Project
  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { id: Date.now(), ...newProject }]);
    setNewProject({ title: "", description: "", url: "" });
    setIsAddModalOpen(false);
  };

  // Open Edit Modal
  const handleEdit = (project) => {
    setEditingProject(project);
    setIsEditModalOpen(true);
  };

  // Save Edited Project
  const handleUpdateProject = (e) => {
    e.preventDefault();
    setProjects(
      projects.map((p) => (p.id === editingProject.id ? editingProject : p))
    );
    setIsEditModalOpen(false);
    setEditingProject(null);
  };

  // Delete Project
  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📁 Manage Projects</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow-md border"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 my-2">{project.description}</p>
            <a
              href={project.url}
              className="text-indigo-600 text-sm underline"
              target="_blank"
            >
              Visit Project
            </a>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleEdit(project)}
                className="flex items-center gap-1 text-sm bg-yellow-400 px-2 py-1 rounded text-white hover:bg-yellow-500"
              >
                <Pencil size={14} /> Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
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
            title="➕ Add New Project"
          >
            <form onSubmit={handleAddProject} className="space-y-4">
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                className="w-full p-2 border rounded h-20"
              />
              <input
                type="url"
                placeholder="Project URL"
                value={newProject.url}
                onChange={(e) =>
                  setNewProject({ ...newProject, url: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
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
        {isEditModalOpen && editingProject && (
          <Modal
            onClose={() => setIsEditModalOpen(false)}
            title="✏️ Edit Project"
          >
            <form onSubmit={handleUpdateProject} className="space-y-4">
              <input
                type="text"
                value={editingProject.title}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    title: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                value={editingProject.description}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    description: e.target.value,
                  })
                }
                className="w-full p-2 border rounded h-20"
              />
              <input
                type="url"
                value={editingProject.url}
                onChange={(e) =>
                  setEditingProject({ ...editingProject, url: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
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

/* ---------------- Modal Component ---------------- */
function Modal({ children, onClose, title }: any) {
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
