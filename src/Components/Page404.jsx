import React from "react";
import img404 from "../Imgs/theDude404.gif";

export const Page404 = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-center  content-center ">
      <h2 className="mt-10 text-9xl text-center">404</h2>
      <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span class="text-red-500">Oops!</span> Page not found
      </h6>

      <p class="text-center text-gray-500 md:text-lg">
        The page you’re looking for doesn’t exist.
      </p>
      <img src={img404} alt="" className="w-[140px] m-auto" />
    </div>
  );
};
