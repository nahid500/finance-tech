"use client";

import Loading from "@/components/ui/Loading";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const DashboardBlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading } = useGetAllBlogQuery({
    searchTerm,
    page,
    limit,
  });

  const blogs = data?.data?.blogs;
  const totalPages = data?.data?.meta?.totalPages;

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting blog...");
    try {
      const res = await axios.delete(
        `https://jakaria-finance-backend.vercel.app/api/v1/blogs/${id}`
      );

      if (res.data.success) {
        toast.success("Blog deleted successfully", { id: toastId });
      }
    } catch (err) {
      console.error("Error deleting blog:", err.message);
      toast.error("Failed to delete blog", { id: toastId });
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl md:text-4xl font-medium">Dashboard Blogs</h1>
        <Link href={"/dashboard/add-blog"}>
          <button className="btn-primary">Add blog</button>
        </Link>
      </div>

      {/* Search bar */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="w-full sm:w-1/3"
        />
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Image
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Title
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Topic
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs?.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No blogs found
                  </td>
                </tr>
              )}

              {blogs?.map((blog, index) => (
                <tr
                  key={blog._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-2">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      className="border border-black rounded-full size-10"
                      width={40}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-2  text-sm font-medium text-gray-900">
                    {blog.title}
                  </td>
                  <td className="px-6 py-2  text-sm  text-gray-900">
                    {blog.topic}
                  </td>

                  <td className="px-6 py-2">
                    <div className="flex space-x-2">
                      <Link href={`/dashboard/blog/${blog._id}`}>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
                        onClick={() => handleDelete(blog._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="px-3 py-1 border rounded">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogPage;
