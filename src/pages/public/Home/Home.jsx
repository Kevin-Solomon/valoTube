import React, { useEffect } from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import VideoListing from './../../../components/VideoListing/VideoListing';
import { useVideo } from '../../../context/video/videoContext';
import { useModal } from '../../../context/modal/modalContext';
import './Home.css';
import Modal from './../../../components/Modal/Modal';

function Home() {
  const { videoState } = useVideo();
  const { modalContent } = useModal();
  return (
    <div>
      <Navbar />
      <div className="home">
        <Drawer />
        <VideoListing videos={videoState.videos} />
      </div>
      {modalContent.display ? <Modal /> : null}
    </div>
  );
}

export default Home;
