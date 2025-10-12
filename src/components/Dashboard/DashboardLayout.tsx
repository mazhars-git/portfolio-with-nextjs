"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  MessageSquare,
  ArrowLeft,
  LogOut,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/dashboard",
    },
    {
      name: "Manage Projects",
      icon: <FolderKanban size={18} />,
      path: "/dashboard/manageProjects",
    },
    {
      name: "Manage Blogs",
      icon: <FileText size={18} />,
      path: "/dashboard/manageBlogs",
    },
    {
      name: "Testimonials",
      icon: <MessageSquare size={18} />,
      path: "/dashboard/manageTestimonials",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-400 via-white to-purple-500 pt-16">
      {/* SIDEBAR */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 240 }}
        className="bg-gradient-to-t from-indigo-400 via-white to-purple-400 shadow-lg flex flex-col transition-all duration-300"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-xl font-bold text-indigo-500 transition-opacity ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}
          >
            My Dashboard
          </h1>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-black hover:text-white border-2 rounded-sm p-0.5"
          >
            <Menu />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-3">
          {navItems.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all mb-2 ${
                pathname === item.path
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer Buttons */}
        <div className="p-4 border-t flex flex-col gap-2">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-indigo-600 hover:bg-indigo-100 p-2 rounded transition"
          >
            <ArrowLeft size={18} /> {!collapsed && "Back to Home"}
          </button>
          <button
            onClick={() => alert("Logging out...")}
            className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded transition"
          >
            <LogOut size={18} /> {!collapsed && "Logout"}
          </button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 p-6"
      >
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {getPageTitle(pathname)}
          </h2>
          <button
            onClick={() => router.push("/")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow"
          >
            ← Back to Home
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 min-h-[60vh]">
          {children}
        </div>
      </motion.main>
    </div>
  );
}

function getPageTitle(path) {
  if (path.includes("projects")) return "Manage Projects";
  if (path.includes("blogs")) return "Manage Blogs";
  if (path.includes("testimonials")) return "Manage Testimonials";
  return "Dashboard Overview";
}
