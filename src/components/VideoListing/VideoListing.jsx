import React from 'react';
import PropTypes from 'prop-types';
import './VideoListing.css';
import VideoCard from '../VideoCard/VideoCard';
import Loading from '../Loading/Loading';
function VideoListing({ videos }) {
  return (
    <div className="video-list">
      {videos.length === 0
        ? [...new Array(15)].map(item => <Loading key={item} />)
        : videos.map(
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
                  description={description}
                  likes={likes}
                  subscribers={subscribers}
                  youtubeId={youtubeId}
                  category={category}
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
