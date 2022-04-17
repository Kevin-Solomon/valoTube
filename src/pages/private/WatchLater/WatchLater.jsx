import React from 'react';
import './WatchLater.css';
import { NavLink } from 'react-router-dom';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import WatchLaterListing from './components/WatchLaterListing/WatchLaterListing';

function WatchLater() {
  return (
    <section>
      <Navbar />
      <article className="watch-wrapper">
        <Drawer />
        <WatchLaterListing />
      </article>
    </section>
  );
}

export default WatchLater;
