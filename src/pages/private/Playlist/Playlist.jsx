import React from 'react';
import { Link } from 'react-router-dom';
import { yoru } from '../../../assests';
import Drawer from '../../../components/Drawer/Drawer';
import Navbar from '../../../components/Navbar/Navbar';
import { useAuth } from '../../../context/auth/authContext';
import { usePlaylist } from '../../../context/playlist/playlistContext';
import { deletePlaylist } from '../../../service';
import { getIcons } from '../../../util';
import './Playlist.css';

function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuth();
  console.log(playlistState);
  return (
    <section>
      <Navbar />

      <article className="playlist-wrapper">
        <Drawer />

        <div className="playlist">
          <h3>Playlist</h3>
          <div className="playlist-list">
            {playlistState.playlist.map(item => {
              return (
                <div className="playlist-card">
                  <Link to={`/playlist/${item._id}`}>
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
                  </Link>

                  <h3 className="playlist-title">
                    {item.title}{' '}
                    <span
                      onClick={e => {
                        console.log('clicked');
                        e.stopPropagation();
                        deletePlaylist(item._id, token, playlistDispatch);
                      }}
                    >
                      {getIcons('DELETE', '25px')}
                    </span>
                  </h3>
                  <p className="playlist-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Playlist;
