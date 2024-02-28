import { useState } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/Kalvium-Logo-SVG.svg';
// eslint-disable-next-line react/prop-types
const Navbar = ({ handleChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
// Searchbox functionality
  const Searchbox = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleChange(value);
  };
// The navbar section
  return (
    <div>
      <div className="flexbox">
        <img
          src={logo}         
          alt=""
          className="logo"
        />

        <div className="search-bar">
          <input
            placeholder="Search BookShelf"
            className="searchbox"
            value={searchTerm}
            onChange={Searchbox}
          />
          <div className="search-icon">
            <SearchIcon
              className="searchbutton"
              sx={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>

        <div className="register-div">
          <NavLink to="/register">
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faInfo} className="i-size" />}
              className="Register-btn"
            >
              Register
            </Button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
