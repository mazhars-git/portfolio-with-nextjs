export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-600 text-white flex flex-col p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <nav className="space-y-4">
          <a href="/dashboard/projects" className="block hover:text-indigo-200">
            Projects
          </a>
          <a href="/dashboard/blogs" className="block hover:text-indigo-200">
            Blogs
          </a>
          <a
            href="/dashboard/testimonials"
            className="block hover:text-indigo-200"
          >
            Testimonials
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">{children}</main>
    </div>
  );
}
