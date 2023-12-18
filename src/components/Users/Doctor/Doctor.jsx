import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Doctor.css";
import Searchbar from "../../Searchbar/Searchbar";
import DoctorFeed from "./DoctorFeed";

function createData(
  doctorName,
  emailAddress,
  specialArea,
  registerNumber,
  action
) {
  return { doctorName, emailAddress, specialArea, registerNumber, action };
}

const Doctor = () => {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  console.log(rows);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch("/api/user/doctors");

        if (response.ok) {
          const data = await response.json();
          // Assuming your API response is an array of doctors
          const updatedRows = data.map((doctor) =>
            createData(
              doctor.username,
              doctor.email,
              doctor.doctor.specific_area,
              doctor.doctor.regi_no,
              doctor._id
            )
          );
          setRows(updatedRows);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false); // Set loading to false after data is fetched
    };

    fetchDoctors();
  }, []);

  const handleEdit = (row) => {
    // Add logic for handling edit action
    console.log(`Edit clicked for ${row._id}`);
  };

  const handleDelete = async (row) => {
    try {
      const response = await fetch(`/api/user/${row.action}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server returned ${response.status}: ${errorMessage}`);
      }

      // Assuming the delete operation was successful, you might want to update the state
      console.log("User delete successful");

      // Optionally, you can update the state to remove the deleted row
      setRows((prevRows) => prevRows.filter((r) => r._id !== row));
    } catch (error) {
      console.error("Error deleting user:", error.message);
      // Handle the error (e.g., show a notification to the user)
    }
  };

  return (
    <div>
      <DoctorFeed />
      <div
        style={{
          marginTop: "10px",
        }}
        className="searchbar"
      >
        <Searchbar />
        <button>Add doctor</button>
      </div>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Doctor Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Email Address
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Special Area
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Register Number
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.doctorName}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    textAlign: "center",
                  }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.doctorName}
                  </TableCell>
                  <TableCell align="center">{row.emailAddress}</TableCell>
                  <TableCell align="center">{row.specialArea}</TableCell>
                  <TableCell align="center">{row.registerNumber}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(row)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Doctor;
