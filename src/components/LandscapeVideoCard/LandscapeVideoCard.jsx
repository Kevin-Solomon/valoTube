import React from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useHistory } from '../../context/history/historyContext';
import { getIcons } from '../../util';
import { deleteFromHistory } from '../../service';
import { deleteFromLiked } from '../../service';
import './LandscapeVideoCard.css';
import { useLike } from '../../context/likes/likeContext';

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
  inHistory,
  inLikedVideo,
}) {
  const { authState } = useAuth();
  const { historyDispatch } = useHistory();
  const { likeDispatch } = useLike();
  console.log(inHistory);
  const deleteFromList = () => {
    if (!!inHistory) {
      deleteFromHistory(_id, authState.token, historyDispatch);
    }
    if (!!inLikedVideo) {
      deleteFromLiked(_id, authState.token, likeDispatch);
    }
  };
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
            <span onClick={() => deleteFromList()}>
              {getIcons('CLEAR', '20px')}
            </span>
            <span>{getIcons('VIDEO_MENU', '20px')}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandscapeVideoCard;
