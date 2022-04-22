import React from 'react';
import { Link } from 'react-router-dom';
import { yoru } from '../../../assests';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import { usePlaylist } from '../../../context/playlist/playlistContext';
import { getIcons } from '../../../util';
import './Playlist.css';

function Playlist() {
  const { playlistState } = usePlaylist();
  console.log(playlistState);
  return (
    <section>
      <Navbar />
      <article className="playlist-wrapper">
        <Drawer />
        <div>
          {playlistState.playlist.map(item => {
            return (
              <Link to={`/playlist/${item._id}`}>
                <div className="playlist-card">
                  <div className="playlist-thumbnail">
                    <img
                      className="responsive-img "
                      src={item?.videos[0]?.imageThumbnail || yoru}
                    />
                    <div className="img-overlay">
                      {item.videos.length} videos
                      {getIcons('PLAYLIST_ADD', '25px')}
                    </div>
                  </div>

                  <h3 className="playlist-title">{item.title}</h3>
                  <p className="playlist-description">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default Playlist;
