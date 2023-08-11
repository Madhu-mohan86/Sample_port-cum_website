import React from "react";

export default function Portfolioheader() {
  return (
    <div>
      {/* Profile circle*/}
      <div className="relative ml-10 overflow-hidden bg-white border-2 border-black rounded-full w-36 h-36 top-10 shadow-black">
        <img src="" alt="" />
      </div>
      {/*  Name container */}
      <h1 className="text-5xl font-extrabold right-14 top-10 font-Roboto">
        MADHU MOHAN
      </h1>
      <hr class="w-full h-[0.15rem] -my-1 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </div>
  );
}
