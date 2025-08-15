"use client";

import { formatDateToYMD } from "@/utils/formateData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardHome = ({ blog }) => {
  const { title, img, createdDate, topic, _id } = blog;

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border">
      {/* Image */}
      <div className="relative w-full h-48 md:h-60">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          {topic}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          {formatDateToYMD(createdDate)}
        </p>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Read more */}
        <Link
          href={`/blogs/${_id}`}
          className="mt-auto inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-medium px-4 py-3 rounded-md text-center transition-colors duration-300"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCardHome;
