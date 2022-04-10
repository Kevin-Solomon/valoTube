import propTypes from 'prop-types';
import React from 'react';
import { getIcons, getLastPosted, getStringValue } from '../../util';
import './VideoCard.css';
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
  return (
    <>
      <div className="video-card">
        <div className="video-thumbnail-wrapper">
          <img
            className="responsive-img video-thumbnail"
            src={imageThumbnail}
          />
        </div>

        <div className="video-card-footer">
          <img className="video-card-channel" src={channelThumbnail} />
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
          <div className="video-menu">{getIcons('VIDEO_MENU', '20px')}</div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
VideoCard.prototype = {
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
