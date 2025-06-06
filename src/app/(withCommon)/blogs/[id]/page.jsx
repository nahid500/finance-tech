"use client";

import { ContactButton } from "@/components/ContactButton";
import { formatDateToYMD } from "@/utils/formateData";
import axios from "axios";
import { Check, House, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await axios.get(
          `https://jakaria-finance-backend.vercel.app/api/v1/blogs/${id}`
        );

        if (response.data?.success) {
          setBlog(response.data.data);
        } else {
          console.error("Failed to fetch blog:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching blog:", error.message);
      }
    };

    getBlogData();
  }, [id]);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="md:mt-24 text-center">Loading....</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-5 md:px-0">
      {/* Topic and date top */}
      <div className="flex items-center gap-4">
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">
          {blog?.topic}
        </span>
        <span className="text-gray-500 text-sm">
          • {formatDateToYMD(blog?.createdAt)}
        </span>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl md:text-5xl font-bold">{blog?.title}</h1>

        <div className="mt-6">
          <Image
            src={blog?.img}
            alt={blog?.title}
            className="w-full md:h-96 object-cover mt-4 rounded-2xl"
            width={800}
            height={400}
          />
        </div>

        <div className="mt-10 border rounded-xl p-5 shadow-lg">
          <p className="text-xl text-gray-600">{blog?.content}</p>
          <hr className="my-8" />

          <div>
            <p className="flex items-center gap-3 mb-3">
              <Check
                className="bg-green-500 text-white p-1 rounded-full"
                size={25}
              />
              <span className="text-xl font-semibold">Conclusion</span>
            </p>
            <p className="bg-green-50 p-5 border-l-4 border-green-500 rounded-lg text-xl text-gray-500">
              In conclusion, mastering these advanced concepts will
              significantly elevate your development capabilities and empower
              you to build more efficient, scalable, and maintainable solutions.
              The key is to continuously practice, stay updated with industry
              trends, and apply these principles in real-world scenarios while
              adapting to emerging technologies.
            </p>
          </div>
        </div>

        <div className="mt-8 border shadow-lg px-5 py-7 rounded-xl flex justify-center items-center w-full gap-4">
          <Link
            href={"/"}
            className=" md:w-1/4 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium px-6 py-3 rounded-md flex justify-center items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-300 text-xs md:text-lg"
          >
            <House size={20} />
            Go to home
          </Link>
          <ContactButton/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
