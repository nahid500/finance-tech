"use client";

import convertImgToBase64 from "@/utils/convertToBase64";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditServicePage = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: service?.title,
      description: service?.description,
      img: null,
    },
  });

  useEffect(() => {
    const getServiceData = async () => {
      try {
        const response = await axios.get(
          `https://jakaria-finance-backend.vercel.app/api/v1/services/${id}`
        );

        if (response.data?.success) {
          const fetchedService = response.data.data;
          setService(fetchedService);

          reset({
            title: fetchedService.title,
            description: fetchedService.description,
            img: null, // Keep this null for file input
          });
        } else {
          console.error("Failed to fetch service:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching service:", error.message);
      }
    };

    getServiceData();
  }, [id, reset]);

  const router = useRouter();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Updating service...");
    let updatedImg = service?.img;

    if (data.img && data.img.length > 0) {
      updatedImg = await convertImgToBase64(data.img[0]);
    }
    const serviceData = {
      title: data.title,
      description: data.description,
      img: updatedImg,
    };

    try {
      const res = await axios.patch(
        `https://jakaria-finance-backend.vercel.app/api/v1/services/${id}`,
        serviceData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success("Service updated successfully", { id: toastId });
        reset();
        router.push("/dashboard/service");
      } else {
        toast.error("Failed to update service", { id: toastId });
      }
    } catch (err) {
      console.error("❌ Submission error:", err.response?.data || err.message);
      toast.error("Failed to update service", { id: toastId });
    }
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
              {...register("title")}
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
          Update Service
        </button>
      </form>
    </div>
  );
};

export default EditServicePage;
