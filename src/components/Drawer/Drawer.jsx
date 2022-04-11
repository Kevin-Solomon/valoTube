import React from 'react';
import { getIcons } from '../../util';
import './Drawer.css';
import DrawerIcons from './DrawerIcons/DrawerIcons';
function Drawer() {
  return (
    <aside className="drawer">
      <DrawerIcons name="Home" type={'HOME'} size={'25px'} />
      <DrawerIcons name="History" type={'HISTORY'} size={'25px'} />
      <DrawerIcons name="Library" type={'LIBRARY'} size={'25px'} />
      <DrawerIcons name="Watch Later" type={'WATCH_LATER'} size={'25px'} />
    </aside>
  );
}

export default Drawer;
