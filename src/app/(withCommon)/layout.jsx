import Navbar from "@/components/Navbar";
import SecondNav from "@/components/SecondNav";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SecondNav/>
      {children}
    </div>
  );
};

export default CommonLayout;
