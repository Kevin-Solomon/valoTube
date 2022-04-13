import React from 'react';
import LandscapeVideoCard from '../../../../../components/LandscapeVideoCard/LandscapeVideoCard';
import { useHistory } from '../../../../../context/history/historyContext';
import './HistoryListing.css';
function HistoryListing() {
  const { historyState } = useHistory();
  console.log([...historyState.history].reverse());
  return (
    <div className="history-listing">
      {[...historyState.history].reverse().map(item => {
        return (
          <LandscapeVideoCard
            channelThumbnail={item.channelThumbnail}
            creator={item.creator}
            imageThumbnail={item.imageThumbnail}
            title={item.title}
            releaseDate={item.releaseDate}
            views={item.views}
            _id={item._id}
            description={item.description}
            likes={item.likes}
            subscribers={item.subscribers}
            youtubeId={item.youtubeId}
            category={item.category}
          />
        );
      })}
    </div>
  );
}

export default HistoryListing;
