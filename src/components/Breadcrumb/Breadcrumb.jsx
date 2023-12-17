// Breadcrumb.js

import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css"; // Import a separate CSS file for styling
import { colors } from "@mui/material";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb-container">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={name}>
            <Link to={routeTo} className="breadcrumb-link">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
            {!isLast && <span style={{ color: "blue" }}> / </span>}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
