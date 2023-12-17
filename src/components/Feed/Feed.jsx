import React from "react";
import "./Feed.css";
import { ArrowUpward } from "@mui/icons-material";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedBottom">
        <div className="bottomUp">
          <div className="buContainer">
            <img src="/assets/clipArt1.PNG" alt="" />

            <div className="buText">
              <div className="count">75</div>
              <div className="userType">Doctors</div>
              <div className="rate">
                <ArrowUpward className="icon" /> 4% (30 days)
              </div>
            </div>
          </div>

          <div className="buContainer">
            <img src="/assets/clipArt2.PNG" alt="" />

            <div className="buText">
              <div className="count">605</div>
              <div className="userType">Pharmacists</div>
              <div className="rate">
                <ArrowUpward className="icon" /> 12% (30 days)
              </div>
            </div>
          </div>

          <div className="buContainer">
            <img src="/assets/clipArt3.PNG" alt="" />

            <div className="buText">
              <div className="count">1520</div>
              <div className="userType">Patients</div>
              <div className="rate">
                <ArrowUpward className="icon" /> 6% (30 days)
              </div>
            </div>
          </div>
        </div>

        <div className="bottomDown"></div>
      </div>
    </div>
  );
}
