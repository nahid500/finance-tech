import React from "react";
import serviceImg from "@/assets/images/s1.png";
import Image from "next/image";
import Link from "next/link";

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

const DashboardBlogPage = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl md:text-4xl font-medium">Dashboard Blogs</h1>
        <Link href={"/dashboard/add-service"}>
          <button className="btn-primary">Add blog</button>
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
                  Title
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Topic
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Content
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceData.map((service, index) => (
                <tr
                  key={service._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-2">
                    <Image
                      src={service.img}
                      alt={service.title}
                      className="border border-black rounded-full"
                      width={40}
                      height={40}
                    />
                  </td>
                  <td className="px-6 py-2  text-sm font-medium text-gray-900">
                    {service.title}
                  </td>
                  <td className="px-6 py-2  text-sm  text-gray-900">
                    {service.topic}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-700 max-w-xs truncate">
                    {service.content}
                  </td>

                  <td className="px-6 py-2">
                    <div className="flex space-x-2">
                      <Link href={`/dashboard/blog/${service._id}`}>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                          Edit
                        </button>
                      </Link>
                      <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">
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

export default DashboardBlogPage;
