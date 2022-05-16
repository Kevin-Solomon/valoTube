import React from 'react';
import './Loading.css';
import './../VideoCard/VideoCard.css';
function Loading() {
  return (
    <div>
      <div className="skeletal-video-card"></div>
      <div className="skeletal-card-footer">
        <div className="skeletal-thumbnail"></div>
        <div>
          <div className="skeletal-text"></div>
          <div className="skeletal-text"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
