import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import { getVideo } from '../../../service/getVideo';
import VideoWrapper from './components/VideoWrapper/VideoWrapper';
import NoteWrapper from './components/NoteWrapper/NoteWrapper';
import { ToastContainer } from 'react-toastify';
import './SingleVideo.css';
import { useNote } from '../../../context/notes/noteContext';

function SingleVideo() {
  const [timeStamp, setTimeStamp] = useState(0);
  const { videoId } = useParams();
  const [video, setVideo] = useState({ _id: '' });
  const { noteState } = useNote();
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
        <VideoWrapper
          setTimeStamp={setTimeStamp}
          video={video}
          youtubeId={video.youtubeId}
        />
        <NoteWrapper timeStamp={timeStamp} videoId={video._id} />
      </section>
    </>
  );
}

export default SingleVideo;
