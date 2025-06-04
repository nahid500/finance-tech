"use client";

import convertImgToBase64 from "@/utils/convertToBase64";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import serviceImg from "@/assets/images/s1.png";

const serviceData = [
  {
    _id: 1,
    title: "ICO Expert",
    content:
      "Easily raise funds within 7 days and ensure long-term growth with expert ICO services. From token creation to attracting investors, every step is carefully managed to ensure your project's success.",
    img: serviceImg,
    topic: "ICO",
  },
  {
    _id: 2,
    title: "Blockchain Development",
    content:
      "Custom blockchain solutions tailored to your business needs. From smart contract development to full blockchain integration, we handle everything.",
    img: serviceImg,
    topic: "Blockchain",
  },
];

const EditServicePage = () => {
  const { edit } = useParams();

  const service = serviceData.find((service) => service._id == edit);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: service?.title,
      content: service?.content,
      topic: service?.topic,
      img: service.img, // Initialize img as null for file input
    },
  });

  const onSubmit = async (data) => {
    let updatedImg = service?.img;

    if (data.img && data.img.length > 0) {
      updatedImg = await convertImgToBase64(data.img[0]);
    }

    const serviceData = {
      title: data.title,
      content: data.content,
      topic: data.topic,
      img: updatedImg,
    };

    console.log(serviceData);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-medium">Edit Service</h1>
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
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditServicePage;
