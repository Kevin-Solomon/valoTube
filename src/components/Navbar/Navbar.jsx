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
            <img
              className="avatar-sm"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <span>Guest</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
