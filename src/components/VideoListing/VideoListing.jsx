import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VideoListing.css';
import VideoCard from '../VideoCard/VideoCard';
import Loading from '../Loading/Loading';
function VideoListing({ videos }) {
  const [filter, setFilter] = useState('');
  return (
    <>
      <div className="video-list">
        <div className="filter">
          <div>
            <input
              name="filter"
              onChange={e => {
                setFilter('');
              }}
              id="all"
              type="radio"
            />
            <label for="all">all</label>
          </div>
          <div>
            <input
              name="filter"
              onChange={e => {
                setFilter(e.target.id);
              }}
              id="chilling"
              type="radio"
            />
            <label for="chilling">chilling</label>
          </div>
          <div>
            <input
              name="filter"
              onChange={e => {
                setFilter(e.target.id);
              }}
              id="content"
              type="radio"
            />
            <label for="content">content</label>
          </div>
          <div>
            <input
              name="filter"
              onChange={e => {
                setFilter(e.target.id);
              }}
              id="montage"
              type="radio"
            />
            <label for="montage">montage</label>
          </div>
        </div>
        {videos.length === 0
          ? [...new Array(15)].map(item => <Loading key={item} />)
          : videos
              .filter(video =>
                filter === '' ? video : video.category.includes(filter)
              )
              .map(
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
    </>
  );
}
VideoListing.propTypes = {
  videos: PropTypes.array,
};
export default VideoListing;
