import React from 'react';
import { Link } from 'react-router-dom';
import { defaultUser } from '../../assests';
import { useAuth } from '../../context/auth/authContext';
import './Navbar.css';

function Navbar() {
  const { authState } = useAuth();
  console.log(authState);
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
        ) : (
          <div className="profile">
            <img class="avatar" src={defaultUser} alt="avatar1"></img>
            <span>
              {authState?.user?.firstName ||
                authState?.createdUser?.name ||
                'Guest'}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
