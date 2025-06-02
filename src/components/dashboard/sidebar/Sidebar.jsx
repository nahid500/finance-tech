"use client";

import {
  FileChartColumnIncreasing,
  LayoutDashboard,
  Notebook,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarItem = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Services",
    path: "/dashboard/service",
    icon: FileChartColumnIncreasing,
  },
  {
    title: "Blog",
    path: "/dashboard/blog",
    icon: Notebook,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="bg-gray-50 h-screen border-r border-gray-400">
      <div className="text-center py-4 border-b border-gray-400 ">
        <h1 className="text-xl md:text-3xl font-bold ">
          <span>Jakaria </span>
          <span className="text-red-600">Inc</span>
        </h1>
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
