import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Subsidebar = () => {
  return (
    <div className="flex flex-row justify-between gap-8 h-[90vh] w-[100%]">
      <div className="flex flex-col justify-center items-center w-[15%] bg-black gap-8">
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/subtraction/two-minus-two"
            className="text-white text-center block"
          >
            Two - Two
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/subtraction/three-minus-three"
            className="text-white text-center block"
          >
            Three - Three
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/subtraction/two-minus-one"
            className="text-white text-center block"
          >
            Two - One
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/subtraction/three-minus-two"
            className="text-white text-center block"
          >
            Three - Two
          </Link>
        </div>
        <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
          <Link
            to="/subtraction/decimal-subtraction"
            className="text-white text-center block"
          >
            Decimal Subtraction
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Subsidebar;
