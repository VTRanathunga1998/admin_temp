import React from "react";
import "./UserPharmacist.css";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import Userfeedtop from "./userfeedtop";
import Searchbar from "../../components/Searchbar/Searchbar";
import { Table } from "@mui/material";

export default function UserPatient() {
  return (
    <div className="container2">
      <Userfeedtop />
      <div className="pharmacist">
        <h2>Pharmacists</h2>
        <div className="des">Here is a list of all pharmacists</div>
      </div>
      <br />
      <div className="searchbar">
        <Searchbar />
        <button>Add pharmacist</button>
      </div>
      <div className="pharmacistable">
        <Table className="pharm-table">
          <thead>
            <tr>
              <th>
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th>Pharmacists Name</th>
              <th>Email Address</th>
              <th>Pharmacy Name</th>
              <th>Register Number</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Lindsey Stroud</td>
              <td>lindsey.stroud@gmail.com</td>
              <td>Technology Department</td>
              <td>Head of Technology</td>
              <td>Colombo</td>
              <td className="buttons">
                <button>
                  <img src="./assets/edit.png" />
                </button>
                <button>
                  <img src="./assets/bin.png" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Lindsey Stroud</td>
              <td>lindsey.stroud@gmail.com</td>
              <td>Technology Department</td>
              <td>Head of Technology</td>
              <td>Kandy</td>
              <td className="buttons">
                <button>
                  <img src="./assets/edit.png" />
                </button>
                <button>
                  <img src="./assets/bin.png" />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
