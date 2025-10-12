"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, FolderPlus, Settings, User } from "lucide-react";

export default function DashboardMain() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-8">
        <TabButton
          icon={<FolderPlus size={18} />}
          label="Projects"
          active={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
        />
        <TabButton
          icon={<FileText size={18} />}
          label="Blog"
          active={activeTab === "blog"}
          onClick={() => setActiveTab("blog")}
        />
        <TabButton
          icon={<User size={18} />}
          label="Profile"
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
        <TabButton
          icon={<Settings size={18} />}
          label="Settings"
          active={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </div>

      {/* Dynamic Content */}
      {activeTab === "projects" && <ProjectsForm />}
      {activeTab === "blog" && <BlogForm />}
      {activeTab === "profile" && <ProfileForm />}
      {activeTab === "settings" && <SettingsForm />}
    </div>
  );
}

/* Reusable Tab Button */
function TabButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition 
        ${
          active
            ? "bg-indigo-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* --- Forms Section --- */

function ProjectsForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl"
    >
      <h2 className="text-xl font-semibold mb-4">➕ Add New Project</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Project URL"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Project Description"
          className="w-full p-2 border rounded h-24"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Project
        </button>
      </form>
    </motion.div>
  );
}

function BlogForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl"
    >
      <h2 className="text-xl font-semibold mb-4">✍️ Add New Blog</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Blog Content"
          className="w-full p-2 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Publish Blog
        </button>
      </form>
    </motion.div>
  );
}

function ProfileForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl"
    >
      <h2 className="text-xl font-semibold mb-4">👤 Update Profile</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Short Bio"
          className="w-full p-2 border rounded h-24"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Profile
        </button>
      </form>
    </motion.div>
  );
}

function SettingsForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl"
    >
      <h2 className="text-xl font-semibold mb-4">⚙️ Settings</h2>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Theme</span>
          <select className="w-full p-2 border rounded mt-1">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Settings
        </button>
      </form>
    </motion.div>
  );
}
