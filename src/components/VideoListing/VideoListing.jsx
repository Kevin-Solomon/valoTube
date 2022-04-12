import React from 'react';
import PropTypes from 'prop-types';
import './VideoListing.css';
import VideoCard from '../VideoCard/VideoCard';
function VideoListing({ videos }) {
  return (
    <div className="video-list">
      {videos.map(
        ({
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
        }) => {
          return (
            <VideoCard
              channelThumbnail={channelThumbnail}
              creator={creator}
              imageThumbnail={imageThumbnail}
              title={title}
              releaseDate={releaseDate}
              views={views}
              _id={_id}
            />
          );
        }
      )}
    </div>
  );
}
VideoListing.propTypes = {
  videos: PropTypes.array,
};
export default VideoListing;
