"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Settings, FileText, LogOut, Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Overview", icon: <Home size={20} />, path: "/dashboard" },
  {
    name: "Projects",
    icon: <FileText size={20} />,
    path: "/dashboard/projects",
  },
  { name: "Blog", icon: <FileText size={20} />, path: "/dashboard/blog" },
  { name: "Profile", icon: <User size={20} />, path: "/dashboard/profile" },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    path: "/dashboard/settings",
  },
];

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <motion.aside
        animate={{ width: isOpen ? 250 : 70 }}
        className="h-screen bg-gradient-to-b from-indigo-600 to-purple-600 text-white flex flex-col shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <motion.h1
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="text-2xl font-bold whitespace-nowrap"
          >
            Dashboard
          </motion.h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1 hover:bg-white/10 rounded"
          >
            <Menu />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mt-8 flex-1 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="flex items-center gap-4 p-3 mx-2 rounded-lg hover:bg-white/10 transition"
            >
              {item.icon}
              {isOpen && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-white/20">
          <button className="flex items-center gap-4 p-3 w-full hover:bg-white/10 rounded-lg transition">
            <LogOut size={20} />
            {isOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Placeholder */}
      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
        <p>
          Here will be your dynamic content, like adding blog posts, projects,
          etc.
        </p>
      </main>
    </div>
  );
}
