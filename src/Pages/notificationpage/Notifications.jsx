import React from "react";
import "./Notifications.css";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import NotiFeed from "./NotiFeed";
import Searchbar from "../../components/Searchbar/Searchbar";
import { Table } from "@mui/material";

export default function Notifications() {
  return (
    <div className="container2">
      <NotiFeed />
      <div className="notification">
        <h2>Notifications</h2>
        <div className="des">Here is a list of all notifications</div>
      </div>
      <br />
      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="notifitable">
        <Table className="noti-table">
          <thead>
            <tr>
              <th colSpan={4}>
                {" "}
                <input type="checkbox" />{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Lindsey Stroud</td>
              <td>Sample message from Lindesy Stroud</td>
              <td>11.21 AM</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Lindsey Stroud</td>
              <td>Sample message from Lindesy Stroud</td>
              <td>11.21 AM</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
