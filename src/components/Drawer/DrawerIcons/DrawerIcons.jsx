import React from 'react';
import { getIcons } from './../../../util';
function DrawerIcons({ size, type, name }) {
  return (
    <>
      <div className="drawer-icons">
        {getIcons(type, size)}
        <div className="text-center">{name}</div>
      </div>
    </>
  );
}

export default DrawerIcons;
