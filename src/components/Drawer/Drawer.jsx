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
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: 'var(--primary-color)' } : null;
        }}
        to="/liked"
      >
        <DrawerIcons name="Liked Videos" type={'LIKE'} size={'25px'} />
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: 'var(--primary-color)' } : null;
        }}
        to="/watch-later"
      >
        <DrawerIcons name="Watch Later" type={'WATCH_LATER'} size={'25px'} />
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: 'var(--primary-color)' } : null;
        }}
        to="/playlist"
      >
        <DrawerIcons name="Playlist" type={'PLAYLIST_ADD'} size={'25px'} />
      </NavLink>
    </aside>
  );
}

export default Drawer;
