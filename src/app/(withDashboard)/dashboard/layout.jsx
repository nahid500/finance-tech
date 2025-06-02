import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
