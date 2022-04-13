import React from 'react';
import LandscapeVideoCard from '../../../../../components/LandscapeVideoCard/LandscapeVideoCard';
import { useAuth } from '../../../../../context/auth/authContext';
import { useHistory } from '../../../../../context/history/historyContext';
import { deleteAllFromHistory } from '../../../../../service';
import { getIcons } from '../../../../../util';
import './HistoryListing.css';

function HistoryListing() {
  const { historyState, historyDispatch } = useHistory();
  const { authState } = useAuth();
  return (
    <div className="history-listing">
      <article className="search-bar">
        <p className="search-bar-title">Watch History</p>
        <span
          onClick={() => deleteAllFromHistory(authState.token, historyDispatch)}
        >
          {getIcons('DELETE', '30px')}
        </span>
      </article>
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
