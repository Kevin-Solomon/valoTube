import React from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import LandscapeVideoCard from '../../../components/LandscapeVideoCard/LandscapeVideoCard';
import Navbar from '../../../components/Navbar/Navbar';
import VideoListing from '../../../components/VideoListing/VideoListing';
import HistoryListing from './components/HistoryListing/HistoryListing';
import { useHistory } from './../../../context/history/historyContext';
import './History.css';
function History() {
  const { historyState } = useHistory();
  return (
    <div>
      <Navbar />
      <article className="history-wrapper">
        <Drawer />
        <HistoryListing />
      </article>
    </div>
  );
}

export default History;
