import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import { useAuth } from '../../../context/auth/authContext';
import { getPlaylistItems } from '../../../service';
import './SinglePlaylist.css';
import LandscapeVideoCard from '../../../components/LandscapeVideoCard/LandscapeVideoCard';
import { usePlaylist } from '../../../context/playlist/playlistContext';
function SinglePlaylist() {
  const { playlistState } = usePlaylist();
  const { playlistId } = useParams();
  const [videos, setVideos] = useState([]);
  const {
    authState: { token },
  } = useAuth();
  useEffect(() => {
    getPlaylistItems(playlistId, token, setVideos);
  }, [token, playlistState]);
  return (
    <section>
      <Navbar />
      <article className="single-playlist-wrapper">
        <Drawer />
        <div className="playlist-video-wrapper">
          {videos.map(video => {
            return (
              <LandscapeVideoCard
                inPlaylist={playlistId}
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
                playlistTitle={video.title}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default SinglePlaylist;
