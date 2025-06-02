"use client";

import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import decodeJwt from "@/utils/jwtDecode";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigation = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigation.push("/login");
      return;
    }

    const decodedToken = decodeJwt(token);

    if (decodedToken.role !== "admin") {
      navigation.push("/login");
      return;
    }

    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 mx-10 mt-10 ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
