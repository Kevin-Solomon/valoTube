import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

function Navbar() {
  const { authState } = useAuth();
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>valoTube</h2>
      </div>
      <div className="right-nav">
        {authState.token === null ? (
          <Link to="/login">
            <button className="primary-btn btn">Login</button>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
