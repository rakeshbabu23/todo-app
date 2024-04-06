import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-around w-[100%] mt-2">
      <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
        <p
          className="text-white text-center cursor-pointer"
          onClick={() => navigate("/addition")}
        >
          Addition
        </p>
      </div>
      <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
        <p
          className="text-white text-center cursor-pointer"
          onClick={() => navigate("/subtraction")}
        >
          Subtraction
        </p>
      </div>
      <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
        <p
          className="text-white text-center cursor-pointer"
          onClick={() => navigate("/multiplication")}
        >
          Multiplication
        </p>
      </div>
      <div className="bg-blue-500 rounded-md border-2 border-white p-2 w-[150px]">
        <p
          className="text-white text-center cursor-pointer"
          onClick={() => navigate("/division")}
        >
          Division
        </p>
      </div>
    </div>
  );
};

export default Topbar;
