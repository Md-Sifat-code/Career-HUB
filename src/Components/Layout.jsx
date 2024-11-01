import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Foot from "./Foot";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};
export default Layout;
