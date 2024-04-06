import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Mulsidebar from "./Mulsidebar";
import Subsidebar from "./Subsidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import TwoPlusTwo from "./TwoPlusTwo";

const Mainscreen = () => {
  return (
    <>
      <Topbar />
      <div className="mt-4  flex flex-row">
        <Outlet />
      </div>
    </>
  );
};

export default Mainscreen;
