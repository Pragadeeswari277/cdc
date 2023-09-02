import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css";
export const Navbar = ()=>{
      const [menuOpen,setMenuOpen]=useState(false)

    return (
    <nav>
        <Link to="/" className="title">
          <h3 style={{color:"#051672"}}>CDC</h3>
            <h5 style={{color:"#9F2AA2"}}>Coimbatore Dermal Clinic</h5>
            </Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen? "open" : ""}>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/doctors">Our Doctors</NavLink>
            </li>
            <li>
                <NavLink to="treatments">Treatments Offered</NavLink>
            </li>
        </ul>
    </nav>
    );
};