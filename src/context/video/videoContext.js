import { createContext, useContext, useReducer, useEffect } from 'react';
import { initialVideoState, videoReducer } from '../../reducer';

import { getVideos } from '../../service';
const VideoContext = createContext({ videoState: [], videoDispatch: () => {} });

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  useEffect(() => {
    (async () => {
      const videos = await getVideos();
      console.log(videos);
      videoDispatch({ type: 'INITIAL', payload: videos });
    })();
  }, []);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
