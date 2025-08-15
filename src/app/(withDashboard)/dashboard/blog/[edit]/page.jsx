"use client";

import convertImgToBase64 from "@/utils/convertToBase64";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditServicePage = () => {
  const { edit } = useParams();
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: blog?.title,
      topic: blog?.topic,
      img: null,
      conclusion: blog?.conclusion,
      createdDate: blog?.createdDate,
    },
  });

  const editor = useRef(null);
  const [content, setContent] = useState(blog?.content);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
    }),
    [blog]
  );

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await axios.get(
          `https://jakaria-finance-backend.vercel.app/api/v1/blogs/${edit}`
        );

        if (response.data?.success) {
          const fetchedBlog = response.data.data;
          setBlog(fetchedBlog);

          reset({
            title: fetchedBlog.title,
            topic: fetchedBlog.topic,
            img: null,
            conclusion: fetchedBlog.conclusion,
          });

          setContent(fetchedBlog.content);
        } else {
          console.error("Failed to fetch blog:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching blog:", error.message);
      }
    };

    getBlogData();
  }, [edit, reset]);

  const onSubmit = async (data) => {
    const toastId = toast.loading("Updating blog...");
    let updatedImg = blog?.img;

    if (data.img && data.img.length > 0) {
      updatedImg = await convertImgToBase64(data.img[0]);
    }

    const blogData = {
      title: data.title,
      content: content,
      topic: data.topic,
      img: updatedImg,
      conclusion: data.conclusion,
      createdDate: data.createdDate,
    };

    try {
      const res = await axios.patch(
        `https://jakaria-finance-backend.vercel.app/api/v1/blogs/${edit}`,
        blogData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        reset();
        router.push("/dashboard/blog");
      }
    } catch (err) {
      console.error("Error updating blog:", err);
      toast.error(err.response?.data?.message || "Failed to update blog", {
        id: toastId,
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-medium">Edit Service</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full">
        <div className="flex w-full gap-2">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Blog Title
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="Enter blog title"
              className="w-full py-3"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Blog Topic
            </label>
            <input
              type="text"
              {...register("topic")}
              placeholder="Enter blog Topic"
              className="w-full py-3"
            />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="mb-4 w-full">
            <label htmlFor="blogImg" className="block text-sm font-medium mb-2">
              Blog Image
            </label>
            <input
              type="file"
              {...register("img")}
              accept="image/*"
              className="w-full file:mr-4 file:py-1.5 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <span className="text-xs text-gray-500">
              Max size: 500KB, accepted formats: jpg, jpeg, png
            </span>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Update createdDate
            </label>
            <input
              type="date"
              {...register("createdDate")}
              className="w-full py-3"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Conclusion</label>
          <textarea
            {...register("conclusion")}
            placeholder="Enter blog conclusion"
            className="w-full py-3"
          />
        </div>

        <hr className="my-4 border-zinc-400" />

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Blog Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </div>

        <button
          type="submit"
          className="btn-primary px-6 py-2 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditServicePage;
