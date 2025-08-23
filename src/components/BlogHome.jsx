import Link from "next/link";
import BlogCardHome from "./ui/BlogCardHome";

const BlogHome = async () => {
  const res = await fetch(
    "https://jakaria-finance-backend.vercel.app/api/v1/blogs"
  );
  const data = await res.json();

  return (
    <div id="blog" className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Latest Blogs
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Explore our latest blogs to stay updated with the latest trends and
          insights.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data?.data?.blogs?.slice(0, 3).map((blog) => (
          <BlogCardHome key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/blogs"
          className="
            mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-3 rounded-md text-center transition-colors duration-300"
        >
          View all blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogHome;
