import React from "react";
import 'style/NavBar.css';  // Import the CSS file

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="left">Your Name</div>
      <div className="middle">
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="right">
        {/* No language change button */}
      </div>
    </nav>
  );
};

export default NavBar;
