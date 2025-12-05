// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "/projects" },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "backdrop-blur-md bg-white/80 shadow-lg py-3"
//           : "backdrop-blur-sm bg-white/10 py-5"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold tracking-wide">
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className={`bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent transition ${
//               isScrolled ? "text-lg" : "text-2xl"
//             }`}
//           >
//             MAZHAR
//           </motion.span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {navLinks.map((link, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 href={link.href}
//                 className={`transition font-medium ${
//                   isScrolled
//                     ? "text-gray-800"
//                     : "text-white hover:text-indigo-800"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <Link
//             href="/dashboard"
//             className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md shadow-lg hover:from-indigo-600 hover:to-purple-700 transition"
//           >
//             Dashboard
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`${isScrolled ? "text-gray-800" : "text-white"} md:hidden`}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className={`md:hidden px-6 py-4 space-y-4 ${
//               isScrolled
//                 ? "bg-white/90 text-gray-800"
//                 : "bg-gradient-to-b from-gray-900/80 to-gray-800/80 text-white"
//             } backdrop-blur-md`}
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="block text-base font-medium hover:text-indigo-500 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               href="/dashboard"
//               className="block bg-gradient-to-r from-indigo-500 to-purple-600 text-center text-white px-4 py-2 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Dashboard
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext/ThemeContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // ⬅️ Access Theme Hook

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg py-3"
          : "backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent transition ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}
          >
            MAZHAR
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={`transition font-medium ${
                  isScrolled
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-white dark:text-gray-100 hover:text-indigo-400"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* 🌗 Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md shadow-lg hover:from-indigo-600 hover:to-purple-700 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isScrolled ? "text-gray-800 dark:text-gray-100" : "text-white"
          } md:hidden`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden px-6 py-4 space-y-4 ${
              isScrolled
                ? "bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100"
                : "bg-gradient-to-b from-gray-900/80 to-gray-800/80 text-white"
            } backdrop-blur-md`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium hover:text-indigo-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* 🌙 Theme Toggle in Mobile */}
            <button
              onClick={toggleTheme}
              className="w-full flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 rounded-full hover:scale-105 transition-transform"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={18} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} /> Dark Mode
                </>
              )}
            </button>

            <Link
              href="/dashboard"
              className="block bg-gradient-to-r from-indigo-500 to-purple-600 text-center text-white px-4 py-2 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
