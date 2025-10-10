// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const posts = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js",
//     date: "October 10, 2025",
//     description:
//       "A beginner-friendly guide to building modern web apps with Next.js and Tailwind CSS.",
//     image: "/blog1.jpg",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     id: 2,
//     title: "Why Tailwind CSS is Awesome",
//     date: "October 7, 2025",
//     description:
//       "Discover why Tailwind CSS has become the favorite utility-first CSS framework.",
//     image: "/blog2.jpg",
//     slug: "why-tailwind-css-is-awesome",
//   },
//   {
//     id: 3,
//     title: "Deploying Next.js Apps for Free",
//     date: "September 28, 2025",
//     description:
//       "Learn the easiest way to deploy your Next.js apps for free using platforms like Vercel.",
//     image: "/blog3.jpg",
//     slug: "deploying-nextjs-apps-for-free",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="container py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Section Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-8"
//         >
//           📚 Latest{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
//             Blogs
//           </span>
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post) => (
//             <motion.div
//               key={post.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="bg-orange-300 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition"
//             >
//               <Image
//                 src={post.image}
//                 width={150}
//                 height={150}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <p className="text-sm text-gray-500 mb-2">{post.date}</p>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {post.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 line-clamp-3">
//                   {post.description}
//                 </p>
//                 <Link
//                   href={`/blog/${post.slug}`}
//                   className="inline-block text-indigo-600 font-semibold hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample blog posts
const blogs = [
  {
    title: "Building a Responsive Portfolio with Next.js",
    description:
      "Learn how to create a modern, responsive portfolio using Next.js, Tailwind CSS, and Framer Motion for animations.",
    date: "Oct 5, 2025",
    image: "/blogs/portfolio.jpg",
    link: "#",
  },
  {
    title: "10 Tips for Writing Clean React Code",
    description:
      "Improve your React projects with these 10 essential tips for writing clean, maintainable code.",
    date: "Sep 20, 2025",
    image: "/blogs/react-tips.jpg",
    link: "#",
  },
  {
    title: "Understanding Tailwind CSS Utilities",
    description:
      "A deep dive into Tailwind CSS utilities, helping you build fast and scalable front-end designs.",
    date: "Aug 15, 2025",
    image: "/blogs/tailwind.jpg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Blogs
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-12"
        >
          Read my latest thoughts on web development, design, and programming
          tips.
        </motion.p>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-2 transition-all"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {blog.description}
                  </p>
                </div>
                <span className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                  {blog.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
