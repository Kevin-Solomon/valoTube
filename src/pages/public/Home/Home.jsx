import React, { useEffect } from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import VideoListing from './../../../components/VideoListing/VideoListing';
import { useVideo } from '../../../context/video/videoContext';
import './Home.css';

function Home() {
  const { videoState } = useVideo();
  return (
    <div>
      <Navbar />
      <div className="home">
        <Drawer />
        <VideoListing videos={videoState.videos} />
      </div>
    </div>
  );
}

export default Home;
