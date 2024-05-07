import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div> */}
        <div className="items">
          <div className="item">
            <button
              onClick={logout}
              className="hover:text-red-500 font-semibold duration-150"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
