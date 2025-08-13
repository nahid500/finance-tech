"use client";

import { ContactButton } from "@/components/ContactButton";
import Loading from "@/components/ui/Loading";
import { useGetAllBlogQuery, useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { formatDateToYMD } from "@/utils/formateData";
import { Check, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const SingleBlogPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBlogQuery(id);
  const { data: allBlog, isLoading: allLoading } = useGetAllBlogQuery({});

  if (isLoading || allLoading) {
    return <Loading />;
  }

  const allBlogData = allBlog?.data?.blogs;
  const blog = data?.data;

  const currentIndex = allBlogData.findIndex((item) => item._id === blog._id);
  const prevBlog = allBlogData[currentIndex + 1] || null;
  const nextBlog = allBlogData[currentIndex - 1] || null;

  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-5 md:px-0 pt-10">
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
          <div
            className="text-xl text-gray-600 pt-5"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          ></div>
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
              {blog?.conclusion}
            </p>
          </div>
        </div>

        {/* Prev & Next buttons */}
        <div className="flex justify-between items-center mt-6">
          {prevBlog ? (
            <Link
              href={`/blogs/${prevBlog._id}`}
              className="py-2 px-4 border border-zinc-500 rounded-md bg-gray-100 hover:bg-gray-200 w-full max-w-[400px] text-center"
            >
              Previous
            </Link>
          ) : (
            <span className="w-full max-w-[400px]" />
          )}
          {nextBlog ? (
            <Link
              href={`/blogs/${nextBlog._id}`}
              className="py-2 px-4 border border-zinc-500 rounded-md bg-gray-100 hover:bg-gray-200 w-full max-w-[400px] text-center"
            >
              Next
            </Link>
          ) : (
            <span className="w-full max-w-[400px]" />
          )}
        </div>

        <div className="mt-8 border shadow-lg px-5 py-7 rounded-xl flex justify-center items-center w-full gap-4">
          <Link
            href={"/"}
            className=" md:w-1/4 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium px-6 py-3 rounded-full flex justify-center items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-300 text-xs md:text-lg"
          >
            <House size={20} />
            Go to home
          </Link>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
