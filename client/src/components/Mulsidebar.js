import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Mulsidebar = () => {
  return (
    <div className="flex flex-row justify-between gap-8  w-[100%]">
      <div className="flex flex-col justify-center items-center w-[15%] bg-black gap-8">
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/two-into-two"
            className="text-white text-center block"
          >
            Two * Two
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/one-into-one"
            className="text-white text-center block"
          >
            One * One
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/one-to-thirty"
            className="text-white text-center block"
          >
            From 1 to 30
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/two-into-one"
            className="text-white text-center block"
          >
            Two * One
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/two-into-three"
            className="text-white text-center block"
          >
            Two * Three
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/one-into-three"
            className="text-white text-center block"
          >
            One * Three
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/one-into-three"
            className="text-white text-center block"
          >
            Roots
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/multiplication/squares"
            className="text-white text-center block"
          >
            Squares
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Mulsidebar;
