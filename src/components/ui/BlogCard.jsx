import { formatDateToYMD } from "@/utils/formateData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "dompurify";
import htmlTruncate from "html-truncate";

const BlogCard = ({ blog }) => {
  const truncatedHTML = htmlTruncate(blog.content, 200);

  return (
    <div className=" mx-auto py-4 " key={blog._id}>
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
            <div
              dangerouslySetInnerHTML={{
                __html: truncatedHTML,
              }}
              className="text-gray-700 mb-4"
            ></div>
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
  );
};

export default BlogCard;
