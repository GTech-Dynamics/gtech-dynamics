import React from "react";
import { Outlet } from "react-router-dom";

const WithoutNavBarFooterLayout = ({ children }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default WithoutNavBarFooterLayout;
