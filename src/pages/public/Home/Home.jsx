import React, { useEffect } from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import VideoListing from './../../../components/VideoListing/VideoListing';
import { useVideo } from '../../../context/video/videoContext';
import { ToastContainer } from 'react-toastify';

import './Home.css';

function Home() {
  const { videoState } = useVideo();
  return (
    <div>
      <ToastContainer
        theme="colored"
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <div className="home">
        <Drawer />
        <VideoListing videos={videoState.videos} />
      </div>
    </div>
  );
}

export default Home;
