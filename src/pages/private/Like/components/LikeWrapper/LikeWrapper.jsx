import React from 'react';

function LikeWrapper() {
  return (
    <div className="like-wrapper">
      <div className="like-sidebar">
        <div>
          <img />
          <div>Watch Later</div>
          <div>Number of videos</div>
          <div>Delete All Videos</div>
          <div>
            <img />
            <p>name</p>
          </div>
        </div>
      </div>
      <div className="liked-video"></div>
    </div>
  );
}

export default LikeWrapper;
