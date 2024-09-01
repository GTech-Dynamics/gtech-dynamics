import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const WithNavBarFooterLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default WithNavBarFooterLayout;
