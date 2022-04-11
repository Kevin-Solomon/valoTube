import React from 'react';
import { getIcons } from './../../../util';
function DrawerIcons({ size, type }) {
  return (
    <>
      <div className="drawer-icons">
        {getIcons(type, size)}
        <div className="text-center">Home</div>
      </div>
    </>
  );
}

export default DrawerIcons;
