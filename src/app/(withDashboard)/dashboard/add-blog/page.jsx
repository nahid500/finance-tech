"use client";

import convertImgToBase64 from "@/utils/convertToBase64";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddBlogPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Adding blog...");

    const base64Img = await convertImgToBase64(data.img[0]);
    const serviceData = {
      title: data.title,
      content: data.content,
      topic: data.topic,
      img: base64Img,
    };

    try {
      const res = await axios.post(
        "https://jakaria-finance-backend.vercel.app/api/v1/blogs",
        serviceData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        router.push("/dashboard/blog");
      }
    } catch (err) {
      console.error("Error adding blog:", err);
      toast.error(err.response.data.message, { id: toastId });
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-medium">Add Blogs</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full">
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

        <div className="flex w-full gap-2">
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
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Blog Content</label>
          <textarea
            rows="4"
            {...register("content")}
            placeholder="Enter Blog Content"
            className="w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary px-6 py-2 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
