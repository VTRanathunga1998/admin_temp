import React from "react";
import "./Leftbar.css";
import {
  Home,
  ManageAccounts,
  AccountBox,
  Chat,
  NotificationsActive,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div>
        <div className="leftbar-top">
          <img src="/assets/pts_logo.png" alt="" />
        </div>
      </div>

      <div className="leftbar-navlink">
        <div>
          <NavLink
            to="/"
            className={`nav-link nav-link-item `}
            aria-current="page"
          >
            <div className="leftbarOptions">
              <Home className="optionIcon" />
              <span >Dashboard</span>
            </div>
          </NavLink>

          <NavLink to="account" className={`nav-link nav-link-item `}>
            <div className="leftbarOptions">
              <ManageAccounts className="optionIcon" />
              <span >Account</span>
            </div>
          </NavLink>

          <NavLink to="users" className={`nav-link nav-link-item `}>
            <div className="leftbarOptions">
              <AccountBox className="optionIcon" />
              <span >Users</span>
            </div>
          </NavLink>
          <NavLink to="messages" className={`nav-link nav-link-item `}>
            <div className="leftbarOptions">
              <Chat className="optionIcon" />
              <span >Messages</span>
            </div>
          </NavLink>
          <NavLink to="notifications" className={`nav-link nav-link-item `}>
            <div className="leftbarOptions">
              <NotificationsActive className="optionIcon" />
              <span >Notifications</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
