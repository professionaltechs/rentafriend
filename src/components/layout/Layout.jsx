import React from "react";
import { Outlet } from "react-router-dom";

// LAYOUT COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";

// STYLES
import "../../styles/layout.css";

const Layout = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="outletContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
