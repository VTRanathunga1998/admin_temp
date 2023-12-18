import React from "react";
import "./Messages.css";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import Messagefeed from "./messagefeed";
import Searchbar from "../../components/Searchbar/Searchbar";
import { Table } from "@mui/material";

export default function Messages() {
  return (
    <div className="container2">
      <Messagefeed />
      <div className="message">
        <h2>Messages</h2>
        <div className="des">Here is a list of all messages</div>
      </div>
      <br />
      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="messagetable">
        <Table className="mes-table">
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
