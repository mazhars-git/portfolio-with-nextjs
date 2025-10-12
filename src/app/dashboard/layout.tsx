// export default function DashboardLayout({ children }: any) {
//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-indigo-600 text-white flex flex-col p-6 pt-20 space-y-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <nav className="space-y-4">
//           <a
//             href="/dashboard/manageProjects"
//             className="block hover:text-indigo-200"
//           >
//             Projects
//           </a>
//           <a
//             href="/dashboard/manageBlogs"
//             className="block hover:text-indigo-200"
//           >
//             Blogs
//           </a>
//           <a
//             href="/dashboard/manageTestimonials"
//             className="block hover:text-indigo-200"
//           >
//             Testimonials
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 pt-20 p-8 bg-gray-100 dark:bg-gray-900">
//         {children}
//       </main>
//     </div>
//   );
// }

// app/dashboard/layout.jsx

import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function DashboardLayoutWrapper({ children }: any) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
