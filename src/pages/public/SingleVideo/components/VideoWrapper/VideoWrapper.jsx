import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { getIcons } from '../../../../../util';
import { getStringValue } from './../../../../../util/getStringValue';
import './VideoWrapper.css';
function VideoWrapper({ youtubeId, video }) {
  const someRef = useRef();
  console.log(video);
  useEffect(() => {
    window.addEventListener('click', () => {
      console.log(someRef.current.getCurrentTime());
    });
  }, [youtubeId]);
  return (
    <div className="video-wrapper">
      <ReactPlayer
        width="100%"
        ref={someRef}
        controls
        url={`https://www.youtube.com/watch?v=${youtubeId}`}
      />
      <h3>{video.title}</h3>
      <div className="video-footer">
        <div>
          <span className="video-views text-muted">
            {getStringValue(video.views)}
          </span>
          <span className="text-muted">{video.releaseDate}</span>
        </div>
        <div className="right-video-footer">
          <div>{getIcons('LIKE', '25px')}</div>
          <div>{getIcons('WATCH_LATER', '25px')}</div>
          <div>{getIcons('PLAYLIST_ADD', '28px')}</div>
        </div>
      </div>
      <div className="underline"></div>
      <div>
        <div>
          <img className="channel" src={video.channelThumbnail} />
        </div>
        <div>
          <h4>{video.creator}</h4>
          <h4>{video.subscribers}</h4>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoWrapper;
