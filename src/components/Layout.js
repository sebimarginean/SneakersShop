import React from "react";
import Menu from "../containers/Menu";
import Footer from "./Footer";

const Layout = ({ children, darkMode }) => {
  const classes = darkMode ? "colors-combine" : "colors-combine-dark";
  return (
    <div className={classes}>
      <Menu />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
