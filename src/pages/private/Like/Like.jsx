import React from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import LikeWrapper from './components/LikeWrapper/LikeWrapper';
import './Like.css';
function Like() {
  return (
    <>
      <Navbar />
      <div className="like-container">
        <Drawer />
        <LikeWrapper />
      </div>
    </>
  );
}

export default Like;
