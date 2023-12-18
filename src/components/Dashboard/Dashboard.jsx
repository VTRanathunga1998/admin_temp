import React from "react";
import "./Dashboard.css";
import Feed from "../Feed/Feed";
import ApproveUser from "../ApproveUser/ApproveUser";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Feed />
      <ApproveUser />
    </div>
  );
}
