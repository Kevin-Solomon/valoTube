import React from 'react';
import { getIcons } from '../../util';
import './Drawer.css';
function Drawer() {
  return (
    <aside className="drawer">
      <div className="drawer-icons">
        {getIcons('HOME', '25px')}
        <div className="text-center">Home</div>
      </div>
      <div className="drawer-icons">
        {getIcons('HISTORY', '25px')}
        <div className="text-center">History</div>
      </div>
      <div className="drawer-icons">
        {getIcons('LIBRARY', '25px')}
        <div className="text-center">Playlist</div>
      </div>
      <div className="drawer-icons">
        {getIcons('WATCH_LATER', '25px')}
        <div className="text-center">Watch Later</div>
      </div>
    </aside>
  );
}

export default Drawer;
