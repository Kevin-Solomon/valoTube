import React from 'react';
import { useLike } from './../../../../../context/likes/likeContext';
import { valorantThumbnail } from './../../../../../assests';
import { defaultUser } from './../../../../../assests';
import './LikeWrapper.css';
import LandscapeVideoCard from '../../../../../components/LandscapeVideoCard/LandscapeVideoCard';
function LikeWrapper() {
  const { likeState } = useLike();
  console.log(likeState);
  return (
    <div className="like-wrapper">
      <div className="like-sidebar">
        <img className="responsive-img" src={valorantThumbnail} />
        <h3>Liked Videos</h3>
        <div className="like-sidebar-details">
          <div className="video-count text-muted">
            {likeState.likedVideo.length} videos
          </div>
          <div className="text-muted">Last updated today</div>
        </div>

        <div className="like-sidebar-user">
          <img className="avatar" src={defaultUser} />
          <p>user</p>
        </div>
      </div>
      <div className="liked-video">
        {likeState.likedVideo.length === 0 ? (
          <>
            <iframe
              src="https://giphy.com/embed/3o7aTskHEUdgCQAXde"
              width="480"
              height="204"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>Please watch our videos </p>
          </>
        ) : (
          likeState.likedVideo.map(video => {
            return (
              <LandscapeVideoCard
                channelThumbnail={video.channelThumbnail}
                creator={video.creator}
                imageThumbnail={video.imageThumbnail}
                title={video.title}
                releaseDate={video.releaseDate}
                views={video.views}
                _id={video._id}
                description={video.description}
                likes={video.likes}
                subscribers={video.subscribers}
                youtubeId={video.youtubeId}
                category={video.category}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default LikeWrapper;
