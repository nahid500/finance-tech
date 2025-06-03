import Navbar from "@/components/Navbar";
import SecondNav from "@/components/SecondNav";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <SecondNav/>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
