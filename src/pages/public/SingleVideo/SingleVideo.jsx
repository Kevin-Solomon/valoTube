import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import { getVideo } from '../../../service/getVideo';
import VideoWrapper from './components/VideoWrapper/VideoWrapper';
import NoteWrapper from './components/NoteWrapper/NoteWrapper';
import { ToastContainer } from 'react-toastify';
import './SingleVideo.css';

function SingleVideo() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getVideo(videoId);

      setVideo(response);
    })();
  }, []);
  return (
    <>
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
      <section className="container-flex">
        <VideoWrapper video={video} youtubeId={video.youtubeId} />
        <NoteWrapper />
      </section>
    </>
  );
}

export default SingleVideo;
