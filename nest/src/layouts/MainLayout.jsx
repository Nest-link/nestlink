import React from "react";
import { Footer, Navbar } from "../components/Index";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className={`relative w-max h-max`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
