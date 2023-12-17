import React from "react";
import "./Navbar.css";
import {
  Menu,
  NotificationsActive,
  Settings,
  KeyboardArrowDown,
} from "@mui/icons-material";

export default function navbar() {
  return (
    <div className="navbar ">
      <div className="navbarRight">
        <div className="navbarRRight">
          <Menu />
        </div>
        <div className="navbarRLeft">
          <NotificationsActive />
          <KeyboardArrowDown />
          <Settings />
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}
