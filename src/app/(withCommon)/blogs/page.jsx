"use client";

import BlogCard from "@/components/ui/BlogCard";
import Loading from "@/components/ui/Loading";
import PaginationUI from "@/components/ui/PaginationUI";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import { paginateFormateData } from "@/utils/pagination";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading } = useGetAllBlogQuery({
    searchTerm,
    page,
    limit,
  });

  if (isLoading) {
    return <Loading />;
  }

  const blogs = data?.data?.blogs;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="mt-10">
        <h1 className="text-center text-2xl font-bold ">Welcome to My Blogs</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore my latest articles and insights on various topics. Click on
          the "See more" button to read the full blog.
        </p>
      </div>

      <hr className="my-10" />

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-[600px]"
            placeholder="Search blogs..."
          />
          <Search size={22} className="absolute top-2.5 left-2 text-zinc-400" />
        </div>
      </div>

      {blogs?.length === 0 && (
        <div className="text-center py-4">
          <h2 className="text-lg font-semibold text-zinc-500">
            No blogs found by "{searchTerm}"
          </h2>
        </div>
      )}

      <div>
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <hr className="my-10" />

      <PaginationUI
        totalItem={data?.data?.meta?.totalCount || 0}
        itemPerPage={limit}
        onPageChange={(newPage) => setPage(newPage)}
        currentPage={page}
      />
    </div>
  );
}
