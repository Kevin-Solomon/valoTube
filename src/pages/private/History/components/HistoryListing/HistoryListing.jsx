import React from 'react';
import LandscapeVideoCard from '../../../../../components/LandscapeVideoCard/LandscapeVideoCard';
import { useHistory } from '../../../../../context/history/historyContext';

function HistoryListing() {
  const { historyState } = useHistory();
  console.log(historyState);
  return (
    <div className="history-listing">
      {historyState.history.map(item => {
        <LandscapeVideoCard />;
      })}
    </div>
  );
}

export default HistoryListing;
