"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 px-8 pt-20">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Portfolio{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          Dashboard
        </span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/dashboard/projects"
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center"
        >
          <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
            Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your projects
          </p>
        </Link>
        <Link
          href="/dashboard/blogs"
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center"
        >
          <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
            Blogs
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your blog posts
          </p>
        </Link>
        <Link
          href="/dashboard/testimonials"
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center"
        >
          <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
            Testimonials
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your testimonials
          </p>
        </Link>
      </div>
    </div>
  );
}
