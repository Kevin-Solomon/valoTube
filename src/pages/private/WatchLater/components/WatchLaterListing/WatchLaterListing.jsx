import React from 'react';
import './WatchLaterListing.css';
import { useWatchLater } from './../../../../../context/watchLater/watchLaterContext';
import { valorantThumbnail } from './../../../../../assests';
import { defaultUser } from './../../../../../assests';

function WatchLaterListing() {
  const { watchLaterState } = useWatchLater();
  console.log(watchLaterState);
  return (
    <div className="watch-later-wrapper">
      <div className="watch-later-sidebar">
        <img
          alt="playlist-thumbnail"
          className="responsive-img"
          src={valorantThumbnail}
        />
        <h3>Watch Later Videos</h3>
        <div className="watch-sidebar-details">
          <div className="video-count text-muted">
            {watchLaterState.watchLater.length} videos
          </div>
          <div className="text-muted">Last updated today</div>
        </div>
        <div className="underline"></div>
        <div className="watch-sidebar-user">
          <img alt="profile-picture" className="avatar" src={defaultUser} />
          <p>user</p>
        </div>
      </div>
      <div className="watch-later-video">
        {watchLaterState.watchLater.length === 0 ? (
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
          watchLaterState.watchLater.map(video => {
            return (
              <LandscapeVideoCard
                inLikedVideo
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

export default WatchLaterListing;
