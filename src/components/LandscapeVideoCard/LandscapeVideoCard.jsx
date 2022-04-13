import React from 'react';
import { getIcons } from '../../util';
import './LandscapeVideoCard.css';
function LandscapeVideoCard({
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
      <div className="landscape-video-card">
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
              <span className="video-views text-muted">{views}</span>
              <span className="text-muted">{releaseDate}</span>
            </div>
            <p className="video-description text-muted">{description}</p>
          </div>
          <div className="landscape-video-menu">
            {getIcons('CLEAR', '20px')}
            {getIcons('VIDEO_MENU', '20px')}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandscapeVideoCard;
