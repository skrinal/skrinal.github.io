import React from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation
import './style/NavBar.css';  // Import the CSS file

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <Link to="/">Richard Kamenistak</Link> 
            </div>
            <div className="middle">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
            <div className="right">
                tidindadad
            </div>
        </nav>
    );
};

export default NavBar;
