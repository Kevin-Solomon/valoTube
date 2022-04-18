import propTypes from 'prop-types';
import React, { useState } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { getIcons, getLastPosted, getStringValue } from '../../util';
import { useNavigate } from 'react-router-dom';
import { useHistory } from '../../context/history/historyContext';
import { addToHistory } from '../../service';
import { addToWatchLater } from '../../service';
import './VideoCard.css';
import { useWatchLater } from '../../context/watchLater/watchLaterContext';
function VideoCard({
  channelThumbnail,
  creator,
  description,
  imageThumbnail,
  likes,
  releaseDate,
  subscribers,
  title,
  views,
  youtubeId,
  category,
  _id,
}) {
  const { authState } = useAuth();
  const { historyDispatch } = useHistory();
  const { watchLaterDispatch } = useWatchLater();
  const video = {
    channelThumbnail,
    creator,
    description,
    imageThumbnail,
    likes,
    releaseDate,
    subscribers,
    title,
    views,
    youtubeId,
    category,
    _id,
  };
  const videoClickHandler = async () => {
    const response = await addToHistory(
      {
        channelThumbnail,
        creator,
        description,
        imageThumbnail,
        likes,
        releaseDate,
        subscribers,
        title,
        views,
        youtubeId,
        category,
        _id,
      },
      authState.token,
      historyDispatch
    );
  };

  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div
        className="video-card"
        onMouseLeave={() => {
          setDisplay(false);
        }}
        onClick={() => {
          videoClickHandler();
          navigate(`videos/${_id}`);
        }}
      >
        <div className="video-thumbnail-wrapper">
          <img
            className="responsive-img video-thumbnail"
            alt="video-thumbnail"
            src={imageThumbnail}
          />
        </div>

        <div className="video-card-footer">
          <img
            className="video-card-channel"
            alt="channel-thumbnail"
            src={channelThumbnail}
          />
          <div className="card-text">
            <div className="card-title">{title}</div>
            <div className="text-muted">{creator}</div>
            <div>
              <span className="video-views text-muted">
                {getStringValue(views)}
              </span>
              <span className="text-muted">{getLastPosted(releaseDate)}</span>
            </div>
          </div>
          <div className="video-menu">
            <span
              onClick={e => {
                e.stopPropagation();
                setDisplay(prevState => !prevState);
              }}
            >
              {getIcons('VIDEO_MENU', '20px')}
            </span>
            <div
              className={display ? 'menu-options show-menu' : 'menu-options '}
            >
              <span
                className="menu-options-item"
                onClick={e => {
                  e.stopPropagation();
                  addToWatchLater(video, authState.token, watchLaterDispatch);
                }}
              >
                {getIcons('WATCH_LATER', '20px')}Add to Watch Later
              </span>
              <span className="menu-options-item">
                {getIcons('PLAYLIST_ADD', '20px')}save to playlist
              </span>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
VideoCard.propTypes = {
  channelThumbnail: propTypes.string,
  creator: propTypes.string,
  description: propTypes.string,
  imageThumbnail: propTypes.string,
  likes: propTypes.number,
  releaseDate: propTypes.string,
  subscribers: propTypes.number,
  title: propTypes.string,
  views: propTypes.number,
  youtubeId: propTypes.string,
  category: propTypes.array,
  _id: propTypes.string,
};
