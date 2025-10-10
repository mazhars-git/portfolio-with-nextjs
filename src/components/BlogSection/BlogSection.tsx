"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "October 10, 2025",
    description:
      "A beginner-friendly guide to building modern web apps with Next.js and Tailwind CSS.",
    image: "/blog1.jpg",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is Awesome",
    date: "October 7, 2025",
    description:
      "Discover why Tailwind CSS has become the favorite utility-first CSS framework.",
    image: "/blog2.jpg",
    slug: "why-tailwind-css-is-awesome",
  },
  {
    id: 3,
    title: "Deploying Next.js Apps for Free",
    date: "September 28, 2025",
    description:
      "Learn the easiest way to deploy your Next.js apps for free using platforms like Vercel.",
    image: "/blog3.jpg",
    slug: "deploying-nextjs-apps-for-free",
  },
];

export default function BlogSection() {
  return (
    <section className="container py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-8"
        >
          📚 Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Blogs
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-orange-300 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition"
            >
              <Image
                src={post.image}
                width={150}
                height={150}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-indigo-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
