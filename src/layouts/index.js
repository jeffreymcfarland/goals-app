import React from "react";
import NavBar from "../components/navBar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;
