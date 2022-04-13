import React from 'react';
import { NavLink } from 'react-router-dom';
import { getIcons } from '../../util';
import './Drawer.css';
import DrawerIcons from './DrawerIcons/DrawerIcons';
function Drawer() {
  return (
    <aside className="drawer">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return isActive ? { color: 'var(--primary-color)' } : null;
        }}
      >
        <DrawerIcons name="Home" type={'HOME'} size={'25px'} />
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) => {
          return isActive ? { color: 'var(--primary-color)' } : null;
        }}
      >
        <DrawerIcons name="History" type={'HISTORY'} size={'25px'} />
      </NavLink>
      <NavLink to="/library">
        <DrawerIcons name="Library" type={'LIBRARY'} size={'25px'} />
      </NavLink>
      <NavLink to="/watch-layer">
        <DrawerIcons name="Watch Later" type={'WATCH_LATER'} size={'25px'} />
      </NavLink>
    </aside>
  );
}

export default Drawer;
