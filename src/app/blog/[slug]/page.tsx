export default function BlogDetails({ params }: any) {
  const { slug } = params;

  // Later you can fetch this data from a CMS or database
  // For now, let's just show the slug
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Here goes your blog content. You can replace this with a real blog
          post fetched from an API, database or markdown file.
        </p>
      </div>
    </main>
  );
}
