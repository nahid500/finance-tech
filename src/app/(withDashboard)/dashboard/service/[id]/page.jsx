"use client";

import convertImgToBase64 from "@/utils/convertToBase64";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

const serviceData = [
  {
    _id: 1,
    title: "ICO Expert",
    description:
      "Easily raise funds within 7 days and ensure long-term growth with expert ICO services. From token creation to attracting investors, every step is carefully managed to ensure your project's success.",
  },
  {
    _id: 2,
    title: "Blockchain Development",
    description:
      "Custom blockchain solutions tailored to your business needs. From smart contract development to full blockchain integration, we handle everything.",
  },
];

const EditServicePage = () => {
  const { id } = useParams();

  const service = serviceData.find((service) => service._id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: service?.title,
      description: service?.description,
      img: null, // Initialize img as null, will be updated on file selection
    },
  });

  const onSubmit = async (data) => {
    const base64Img = await convertImgToBase64(data.img[0]);
    const serviceData = {
      name: data.name,
      description: data.description,
      img: base64Img,
    };

    console.log(serviceData);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-medium">Edit Service</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full">
        <div className="flex w-full gap-2">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Service Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter service name"
              className="w-full py-3"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="serviceImage"
              className="block text-sm font-medium mb-2"
            >
              Service Image
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
          <label
            htmlFor="serviceDescription"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            rows="4"
            {...register("description")}
            placeholder="Enter service description"
            className="w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary px-6 py-2 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default EditServicePage;
