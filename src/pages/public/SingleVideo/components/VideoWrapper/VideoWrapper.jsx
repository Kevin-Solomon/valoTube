import React from 'react';
import ReactPlayer from 'react-player';
import { useAuth } from '../../../../../context/auth/authContext';
import { useWatchLater } from './../../../../../context/watchLater/watchLaterContext';
import { useLike } from '../../../../../context/likes/likeContext';
import { addToLike } from '../../../../../service';
import { getIcons } from '../../../../../util';
import { deleteFromLiked } from './../../../../../service';
import { getStringValue } from './../../../../../util/getStringValue';
import { addToWatchLater } from '../../../../../service';
import { deleteFromWatchLater } from '../../../../../service';
import './VideoWrapper.css';

function VideoWrapper({ youtubeId, video, setTimeStamp }) {
  const { authState } = useAuth();
  const { likeState, likeDispatch } = useLike();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const inWatchArray = watchLaterState.watchLater.map(video => video._id);
  const inLikedArray = likeState.likedVideo.map(video => video._id);
  return (
    <div className="video-wrapper">
      <ReactPlayer
        onProgress={res => setTimeStamp(Math.trunc(res.playedSeconds))}
        playing
        width="100%"
        controls
        url={`https://www.youtube.com/watch?v=${youtubeId}`}
      />
      <h3>{video.title}</h3>
      <div className="video-footer">
        <div>
          <span className="video-views text-muted">
            {getStringValue(video.views)} views
          </span>
          <span className="text-muted">{video.releaseDate}</span>
        </div>
        <div className="right-video-footer">
          <div>
            {inLikedArray.includes(video._id) ? (
              <span
                onClick={() =>
                  deleteFromLiked(
                    video._id,
                    authState.token,
                    likeDispatch,
                    video.title
                  )
                }
              >
                {getIcons('LIKE_FILL', '25px')}
              </span>
            ) : (
              <span
                onClick={() => {
                  addToLike(authState.token, video, likeDispatch);
                }}
              >
                {getIcons('LIKE', '25px')}
              </span>
            )}
          </div>
          <div>
            {inWatchArray.includes(video._id) ? (
              <span
                onClick={() => {
                  deleteFromWatchLater(
                    video._id,
                    authState.token,
                    watchLaterDispatch
                  );
                }}
              >
                {getIcons('WATCH_LATER_FILL', '25px')}
              </span>
            ) : (
              <span
                onClick={() => {
                  addToWatchLater(video, authState.token, watchLaterDispatch);
                }}
              >
                {getIcons('WATCH_LATER', '25px')}
              </span>
            )}
          </div>

          <div>{getIcons('PLAYLIST_ADD', '28px')}</div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="video-decription-footer">
        <div>
          <img
            alt="channel-thumbnail"
            className="channel"
            src={video.channelThumbnail}
          />
        </div>
        <div>
          <h4 className="video-creator">{video.creator}</h4>
          <h4 className="video-subscribers text-muted">
            {getStringValue(video.subscribers)} subscribers
          </h4>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoWrapper;
