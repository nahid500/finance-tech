import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <span
        className="
        inline-block
        w-8
        h-8
        border-4
        border-solid
        border-zinc-500
        rounded-full
        animate-spin
        border-t-transparent
      "
      ></span>
    </div>
  );
};

export default Loading;
