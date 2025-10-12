// "use client";
// import Link from "next/link";

// export default function Dashboard() {
//   return (
//     <div className="container mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 px-8 pt-10">
//       <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
//         Portfolio{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
//           Dashboard
//         </span>
//       </h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Link
//           href="/dashboard/manageProjects"
//           className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center"
//         >
//           <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
//             Projects
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400">
//             Manage your projects
//           </p>
//         </Link>
//         <Link
//           href="/dashboard/manageBlogs"
//           className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center"
//         >
//           <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
//             Blogs
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400">
//             Manage your blog posts
//           </p>
//         </Link>
//         <Link
//           href="/dashboard/manageTestimonials"
//           className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center"
//         >
//           <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
//             Testimonials
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400">
//             Manage your testimonials
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  FileText,
  MessageSquare,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

export default function DashboardHome() {
  const stats = [
    {
      title: "Total Projects",
      count: 8,
      icon: <FolderKanban size={32} />,
      color: "bg-indigo-500",
      path: "/dashboard/projects",
    },
    {
      title: "Total Blogs",
      count: 12,
      icon: <FileText size={32} />,
      color: "bg-green-500",
      path: "/dashboard/blogs",
    },
    {
      title: "Testimonials",
      count: 5,
      icon: <MessageSquare size={32} />,
      color: "bg-pink-500",
      path: "/dashboard/testimonials",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Greeting */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          👋 Welcome Back!
        </h1>
        <p className="text-gray-500">
          Here’s a quick overview of your portfolio dashboard.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-lg text-white cursor-pointer ${item.color}`}
          >
            <Link
              href={item.path}
              className="flex justify-between items-center"
            >
              <div>
                <p className="text-sm opacity-80">{item.title}</p>
                <h2 className="text-3xl font-bold">{item.count}</h2>
              </div>
              <div className="p-3 bg-white/20 rounded-full">{item.icon}</div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          ⚡ Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <QuickActionBtn text="Add Project" href="/dashboard/projects" />
          <QuickActionBtn text="Add Blog" href="/dashboard/blogs" />
          <QuickActionBtn
            text="Add Testimonial"
            href="/dashboard/testimonials"
          />
        </div>
      </div>

      {/* Future Analytics Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 p-8 border border-gray-200 rounded-xl bg-gray-50 text-center"
      >
        <h3 className="text-xl font-semibold mb-2">
          📊 Analytics Coming Soon!
        </h3>
        <p className="text-gray-500">
          Here you’ll be able to see charts of your projects, blog traffic, and
          testimonial growth.
        </p>
      </motion.div>
    </div>
  );
}

function QuickActionBtn({ text, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition"
    >
      <PlusCircle size={18} />
      {text}
    </Link>
  );
}
