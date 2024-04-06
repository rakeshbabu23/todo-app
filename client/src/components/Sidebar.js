import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="flex flex-row justify-between gap-8 h-[90vh] w-[100%]">
      <div className="flex flex-col justify-center items-center w-[15%] bg-black gap-8">
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/addition/two-plus-two"
            className="text-white text-center block"
          >
            Two + Two
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/addition/three-plus-three"
            className="text-white text-center block"
          >
            Three + Three
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/addition/one-plus-one"
            className="text-white text-center block"
          >
            One + One
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/addition/two-plus-three"
            className="text-white text-center block"
          >
            Two + Three
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/addition/decimal-addition"
            className="text-white text-center block"
          >
            Decimal Addition
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
