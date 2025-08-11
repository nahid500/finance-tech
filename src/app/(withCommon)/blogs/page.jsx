"use client";

import BlogCard from "@/components/ui/BlogCard";
import { formatDateToYMD } from "@/utils/formateData";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await axios.get(
          "https://jakaria-finance-backend.vercel.app/api/v1/blogs"
        );

        if (response.data?.success) {
          setBlogs(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blog:", error.message);
        console.log(error);
      }
    };

    getBlogData();
  }, []);

  if (loading) {
    return <p className="flex justify-center items-center mt-20">Loading...</p>;
  }

  console.log(blogs);

  if (blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="md:mt-24 text-center">No Blogs Available</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="mt-10">
        <h1 className="text-center text-2xl font-bold ">Welcome to My Blogs</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore my latest articles and insights on various topics. Click on
          the "See more" button to read the full blog.
        </p>
      </div>

      <hr className="my-10" />

      <div>
        {blogs?.blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
