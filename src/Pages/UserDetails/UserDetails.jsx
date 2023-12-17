import { Outlet } from "react-router-dom";
// import { StocksContextProvider } from "../../context/StockContext";

import UserCSS from "./UserDetails.module.css";

const UserDetails = () => {
  return (
    // <StocksContextProvider>
      <div className={UserCSS["stock-container"]}>
        <Outlet />
      </div>
    // </StocksContextProvider>
  );
};

export default UserDetails;
