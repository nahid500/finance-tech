"use client";

import Loading from "@/components/ui/Loading";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "@/redux/api/serviceApi";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const DashboardServices = () => {
  const { data, isLoading } = useGetAllServiceQuery({});
  const [deleteService] = useDeleteServiceMutation();

  if (isLoading) {
    return <Loading />;
  }

  const services = data?.data || [];

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting service...");
    try {
      const res = await deleteService(id).unwrap();
      if (res?.success) {
        toast.success("Service deleted successfully", { id: toastId });
      }
    } catch (err) {
      console.error("Error deleting service:", err.message);
      toast.error("Failed to delete service", { id: toastId });
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl md:text-4xl font-medium">Dashboard Services</h1>
        <Link href={"/dashboard/add-service"}>
          <button className="btn-primary">Add services</button>
        </Link>
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Image
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Service
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Description
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={service._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-2">
                    <Image
                      src={service.img}
                      alt={service.title}
                      className="border border-black rounded-full size-10"
                      width={40}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-2  text-sm font-medium text-gray-900">
                    {service.title}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-700 max-w-xs truncate">
                    {service.description}
                  </td>

                  <td className="px-6 py-2">
                    <div className="flex space-x-2">
                      <Link href={`/dashboard/service/${service._id}`}>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
                        onClick={() => handleDelete(service._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardServices;
