import React from 'react';
import './LandscapeVideoCard.css';
function LandscapeVideoCard() {
  return (
    <>
      <div className="landscape-video-card">
        <div className="video-thumbnail-wrapper">
          <img className="responsive-img video-thumbnail" />
        </div>

        <div className="video-card-footer">
          <img className="video-card-channel" />
          <div className="card-text">
            <div className="card-title">titiel</div>
            <div className="text-muted">creator</div>
            <div>
              <span className="video-views text-muted">viewws</span>
              <span className="text-muted"></span>
            </div>
          </div>
          <div className="video-menu"></div>
        </div>
      </div>
    </>
  );
}

export default LandscapeVideoCard;
