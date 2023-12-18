import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import "./ApproveUser.css";

function createData(name, date, id, created_at, regi_no) {
  return { name, date, id, created_at, regi_no };
}

const ApproveUser = () => {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchRecentUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/user/non-approved-doctors");

        if (response.ok) {
          const data = await response.json();
          const updatedRows = data.map((user) =>
            createData(
              user.username,
              user.email,
              user._id,
              user.createdAt,
              `SLMC - ${user.doctor.regi_no}`
            )
          );
          setRows(updatedRows);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false);
    };

    fetchRecentUsers();
  }, []);

  const formatCreatedAt = (createdAt) => {
    return new Date(createdAt).toLocaleString();
  };

  const handleApprove = (row) => {
    console.log(`Approve clicked for ${row._id}`);
    // Add logic for handling approve action
  };

  const handleDecline = async (row) => {
    try {
      const response = await fetch(`/api/user/${row.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server returned ${response.status}: ${errorMessage}`);
      }

      console.log("User decline successful");

      setRows((prevRows) => prevRows.filter((r) => r._id !== row._id));
    } catch (error) {
      console.error("Error declining user:", error.message);
    }
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: "bold" }}>
                Recent Users
              </TableCell>
            </TableRow>
            {rows.map((row,index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  textAlign: "center",
                }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  {formatCreatedAt(row.created_at)}
                </TableCell>
                <TableCell align="center">{row.regi_no}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleApprove(row)}
                    sx={{
                      borderRadius: "20px",
                      background:
                        "linear-gradient(45deg, #4CAF50 30%, #388E3C 90%)",
                      color: "white",
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleDecline(row)}
                    sx={{
                      borderRadius: "20px",
                      background:
                        "linear-gradient(45deg, #9C27B0 30%, #7B1FA2 90%)",
                      color: "white",
                    }}
                  >
                    Decline
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ApproveUser;
