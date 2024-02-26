import { useState } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ handleChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const Searchbox = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleChange(value);
  };

  return (
    <div>
      <div className="flexbox">
        <img
          src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
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
              startIcon={
                <FontAwesomeIcon icon={faInfo} className="i-size" />
              }
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
