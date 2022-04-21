import React, { useEffect } from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import VideoListing from './../../../components/VideoListing/VideoListing';
import { useVideo } from '../../../context/video/videoContext';
import { ToastContainer } from 'react-toastify';
import { useModal } from '../../../context/modal/modalContext';
import './Home.css';
import Modal from './../../../components/Modal/Modal';

function Home() {
  const { videoState } = useVideo();
  const { modalContent } = useModal();
  console.log(modalContent);
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
      {modalContent.display ? <Modal /> : null}
    </div>
  );
}

export default Home;
