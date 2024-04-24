import React from "react";
import { Link } from "react-router-dom";
import Transport from "@mui/icons-material/CarRental";
import Home from "@mui/icons-material/HomeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Transport sx={{ color: "white", fontSize: 50 }} />
        <Link to={"/"}>
          {" "}
          <h3>AutoFrame</h3>
        </Link>
      </div>
      <div className="a-links">
        <div
          className="logo-txt"
        
        >
          <Link to={"/"}>
            Asosiy{" "}
            <Home
              sx={{
                color: "white",
                fontSize: 25,
              }}
            />
          </Link>
        </div>

        <div className="logo-txt">
          <Link to={"/qollanma"}>
            Qo'llanma{" "}
            <BookOutlinedIcon
              sx={{
                color: "white",
                fontSize: 20,
              }}
            />
          </Link>
        </div>
        <div className="logo-txt">
          <Link to={"/manbalar"}>
            Manbalar{" "}
            <StickyNote2OutlinedIcon
              sx={{
                color: "white",
              }}
            />
          </Link>
        </div>
        <div className="logo-txt">
          <Link to={"/boglanish"}>
            Boglanish{" "}
            <ContactPageOutlinedIcon
              sx={{
                color: "white",
                fontSize: 20,
              }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
