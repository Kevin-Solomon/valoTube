import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>valoTube</h2>
      </div>
      <div className="right-nav">
        <ul>
          <li>Github</li>
          <li>
            <span>Guest</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
