import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import UserPatient from "./Pages/Patientpage/UserPatient";
import Leftbar from "./components/Leftbar/Leftbar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

import "./App.css";
import UserDetails from "./Pages/UserDetails/UserDetails";
import Doctor from "./components/Users/Doctor/Doctor";
import UserPharmacist from "./Pages/pharmacistpage/UserPharmacist";
import Messages from "./Pages/messagepage/Messages";
import Notifications from "./Pages/notificationpage/Notifications";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Leftbar />
        <main className="main-container">
          <Navbar />
          {/* <Breadcrumb /> */}
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route index path="/messages" element={<Messages />} />
            <Route index path="/notifications" element={<Notifications />} />
            <Route path="/users" element={<UserDetails />}>
              {/* Nested routes for /users */}
              <Route index element={<Navigate to="doctor" />} />
              <Route path="doctor" element={<Doctor />} />
              <Route path="pharmacist" element={<UserPharmacist />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
