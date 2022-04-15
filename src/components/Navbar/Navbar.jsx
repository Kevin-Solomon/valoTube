import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>valoTube</h2>
      </div>
      <div className="right-nav">
        <Link to="/login">
          <button className="primary-btn btn">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
