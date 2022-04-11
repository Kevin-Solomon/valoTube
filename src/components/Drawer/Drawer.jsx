import React from 'react';
import { getIcons } from '../../util';
import './Drawer.css';
import DrawerIcons from './DrawerIcons/DrawerIcons';
function Drawer() {
  return (
    <aside className="drawer">
      <DrawerIcons type={'HOME'} size={'25px'} />
      <DrawerIcons type={'HISTORY'} size={'25px'} />
      <DrawerIcons type={'LIBRARY'} size={'25px'} />
      <DrawerIcons type={'WATCH_LATER'} size={'25px'} />
    </aside>
  );
}

export default Drawer;
