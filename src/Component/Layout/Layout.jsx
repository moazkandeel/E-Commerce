import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Offline } from "react-detect-offline";

export default function Leyout() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Offline>Only shown offline (surprise!)</Offline>
        

        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
}
