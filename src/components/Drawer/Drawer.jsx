import React from 'react';
import { getIcons } from '../../util';
import './Drawer.css';
function Drawer() {
  return (
    <aside className="drawer">
      <div className="drawer-icons">{getIcons('HOME', '25px')} Home</div>
      <div className="drawer-icons">{getIcons('HISTORY', '25px')} History</div>
      <div className="drawer-icons">{getIcons('LIBRARY', '25px')} Playlist</div>
      <div className="drawer-icons">
        {getIcons('WATCH_LATER', '25px')} Watch Later
      </div>
    </aside>
  );
}

export default Drawer;
