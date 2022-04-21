import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useModal } from '../../context/modal/modalContext';
import { usePlaylist } from '../../context/playlist/playlistContext';
import {
  addToPlaylist,
  createNewPlaylist,
  deleteFromPlaylist,
} from '../../service';
import { checkVideoExists } from '../../util';
import './Modal.css';
function Modal() {
  const {
    authState: { token },
  } = useAuth();
  const { modalContent, modalContentDispatch } = useModal();
  const [displayInput, setDisplayInput] = useState(false);
  const [playlist, setPlaylist] = useState({ title: '', description: '' });
  const { playlistState, playlistDispatch } = usePlaylist();
  console.log(playlistState.playlist);
  return (
    <>
      <div
        onClick={() => modalContentDispatch({ type: 'CLOSE_MODAL' })}
        style={{ height: document.body.scrollHeight }}
        className="modal-wrapper"
      ></div>
      <div className="modal-content">
        <p>Save to.... </p>
        <button
          className="playlist-btn btn"
          onClick={() => setDisplayInput(prev => !prev)}
        >
          Add playlist
        </button>
        {playlistState.playlist.map(playlist => {
          return (
            <div>
              <input
                type="checkbox"
                checked={checkVideoExists(modalContent.video, playlist)}
                onChange={e => {
                  console.log(e.target.checked);
                  if (e.target.checked) {
                    addToPlaylist(
                      playlist._id,
                      token,
                      modalContent.video,
                      playlistDispatch
                    );
                  } else {
                    deleteFromPlaylist(
                      token,
                      modalContent.video._id,
                      playlist._id,
                      playlistDispatch
                    );
                  }
                }}
              />{' '}
              <span>{playlist.title}</span>
            </div>
          );
        })}
        {displayInput && (
          <div className="playlist-footer">
            <input
              name="title"
              value={playlist.title}
              onChange={e =>
                setPlaylist(prevState => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <input
              name="description"
              value={playlist.description}
              onChange={e =>
                setPlaylist(prevState => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <button
              onClick={() => {
                createNewPlaylist(token, playlist, playlistDispatch);
                setPlaylist({ title: '', description: '' });
                setDisplayInput(false);
              }}
            >
              Create
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
