import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css";
export const Navbar = ()=>{
      const [menuOpen,setMenuOpen]=useState(false)

    return (
    <nav>
        <Link to="/" className="title">Coimbatore Dermal Clinic</Link>
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
                <NavLink to="about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="our doctors">Our Doctors</NavLink>
            </li>
            <li>
                <NavLink to="treatments offered">Treatments Offered</NavLink>
            </li>
        </ul>
    </nav>
    );
};