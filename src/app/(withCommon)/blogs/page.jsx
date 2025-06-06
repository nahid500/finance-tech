"use client";

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
        {blogs.map((blog) => (
          <div className="max-w-7xl mx-auto p-4 " key={blog._id}>
            <div className="overflow-hidden flex flex-col md:flex-row bg-white rounded-lg shadow-md h-[450px] border group hover:shadow-xl transition-shadow duration-300 ">
              <div className="relative w-full h-full md:w-1/2 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                <Image
                  src={blog.img}
                  alt="Blog Image"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                    {blog.topic}
                  </span>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                {/* Top section */}
                <div className="space-y-4">
                  {/* Title */}
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 hover:underline cursor-pointer"
                  >
                    {blog.title}
                  </Link>

                  {/* Description */}
                  <p className="text-gray-600">
                    {blog.content.length > 300
                      ? `${blog.content.slice(0, 300)}...`
                      : blog.content}
                  </p>
                </div>

                {/* Bottom section - Date and CTA */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-gray-500 text-sm">
                    • {formatDateToYMD(blog.createdAt)}
                  </span>

                  <Link href={`/blogs/${blog._id}`}>
                    <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium text-xs md:text-sm flex justify-center items-center gap-2">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
