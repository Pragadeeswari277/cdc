import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bg, setBg] = useState(0);
  const location = useLocation();

  return (
    <nav>
      <Link to="/home" className="title">
        <h3 style={{ color: "#051672" }}>TCDC</h3>
        <h5 style={{ color: "#9F2AA2" }}>The Coimbatore Dermal Centre</h5>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            className={location.pathname === "/" ? "active" : null}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
           
            to="/doctors"
          >
            Our Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
           
            to="treatments"
          >
            Treatments Offered
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
