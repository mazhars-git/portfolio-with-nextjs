import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Hi, I’m <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              I’m a web developer who loves building clean, modern & fast
              websites. This is my portfolio where you can explore my projects
              and skills.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Image / illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/hero-image.png" // put your image in /public
                alt="Hero Image"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
