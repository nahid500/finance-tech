"use client";

import {
  FileChartColumnIncreasing,
  FilePlus2,
  Newspaper,
  Notebook,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItem = [
  {
    title: "Services",
    path: "/dashboard/service",
    icon: FileChartColumnIncreasing,
  },
  {
    title: "Add Service",
    path: "/dashboard/add-service",
    icon: FilePlus2,
  },
  {
    title: "Blog",
    path: "/dashboard/blog",
    icon: Notebook,
  },
  {
    title: "Add Blog",
    path: "/dashboard/add-blog",
    icon: FilePlus2,
  },
  {
    title: "Newsletter",
    path: "/dashboard/newsletter",
    icon: Newspaper,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-gray-50 h-screen border-r border-gray-400">
      <div className="text-center py-4 border-b border-gray-400 ">
        <Link href={"/"} className="cursor-pointer">
          <h1 className="text-xl md:text-3xl font-bold ">
            <span>Jakaria </span>
            <span className="text-red-600">Inc</span>
          </h1>
        </Link>
      </div>

      {/* Sidebar item */}
      <div className="flex flex-col gap-4 pt-4">
        {sidebarItem.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`truncate font-semibold px-4 py-2 flex items-center gap-4 ${
              pathname === item.path
                ? "bg-sky-100 border-r-4 border-sky-500 text-sky-600"
                : ""
            }`}
          >
            <span>{<item.icon size={20} />}</span>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
