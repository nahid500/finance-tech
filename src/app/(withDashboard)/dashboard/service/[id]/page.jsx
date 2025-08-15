"use client";

import Loading from "@/components/ui/Loading";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import convertImgToBase64 from "@/utils/convertToBase64";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditServicePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const serviceData = data?.data;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: serviceData?.title || "",
      description: serviceData?.description || "",
      features: Array.isArray(serviceData?.features)
        ? serviceData.features.join(" || ")
        : "",
      img: serviceData?.img || null,
    },
  });

  useEffect(() => {
    if (serviceData) {
      reset({
        title: serviceData.title || "",
        description: serviceData.description || "",
        features: Array.isArray(serviceData.features)
          ? serviceData.features.join(" || ")
          : "",
        img: serviceData.img || null,
      });
    }
  }, [serviceData, reset]);

  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    const toastId = toast.loading("Updating service...");
    let updatedImg = serviceData?.img;

    if (data.img && data.img.length > 0 && data.img[0] instanceof Blob) {
      updatedImg = await convertImgToBase64(data.img[0]);
    }
    const updatedData = {
      title: data.title,
      description: data.description,
      img: updatedImg,
      features: data.features.split("||").map((feature) => feature.trim()),
    };

    try {
      const res = await updateService({ id, data: updatedData }).unwrap();

      if (res?.success) {
        toast.success("Service updated successfully", { id: toastId });
        reset();
        router.push("/dashboard/service");
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

        <div className="mb-4 w-full">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Service Features
          </label>
          <input
            type="text"
            {...register("features")}
            placeholder="Enter service features ( separated by commas )"
            className="w-full py-3"
          />
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
