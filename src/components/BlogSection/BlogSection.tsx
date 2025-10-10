"use client";

import Link from "next/link";

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
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          📚 Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={post.image}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
