import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import UserPatient from "./Pages/Patientpage/UserPatient";
import Leftbar from "./components/Leftbar/Leftbar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

import "./App.css";
import UserDetails from "./Pages/UserDetails/UserDetails";
import Doctor from "./components/Users/Doctor/Doctor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Leftbar />
        <main className="main-container">
          <Navbar />
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserDetails />}>
              {/* Nested routes for /users */}
              <Route index element={<Navigate to="doctor" />} />
              <Route path="doctor" element={<Doctor />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
