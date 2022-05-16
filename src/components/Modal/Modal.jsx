import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useModal } from '../../context/modal/modalContext';
import { usePlaylist } from '../../context/playlist/playlistContext';
import {
  addToPlaylist,
  createNewPlaylist,
  deleteFromPlaylist,
} from '../../service';
import { checkVideoExists, getIcons } from '../../util';
import './Modal.css';
function Modal() {
  const {
    authState: { token },
  } = useAuth();
  const { modalContent, modalContentDispatch } = useModal();
  const [displayInput, setDisplayInput] = useState(false);
  const [playlist, setPlaylist] = useState({ title: '', description: '' });
  const { playlistState, playlistDispatch } = usePlaylist();
  return (
    <>
      <div
        onClick={() => modalContentDispatch({ type: 'CLOSE_MODAL' })}
        style={{ height: document.body.scrollHeight }}
        className="modal-wrapper"
      ></div>
      <div className="modal-content">
        <p className="modal-title">
          Save to....{' '}
          <span onClick={() => modalContentDispatch({ type: 'CLOSE_MODAL' })}>
            {getIcons('CLEAR', '25px')}
          </span>
        </p>

        {playlistState.playlist.length === 0 ? (
          <p>make new playlist please</p>
        ) : (
          playlistState.playlist.map(playlist => {
            return (
              <div>
                <input
                  type="checkbox"
                  checked={checkVideoExists(modalContent.video, playlist)}
                  onChange={e => {
                    if (e.target.checked) {
                      addToPlaylist(
                        playlist._id,
                        token,
                        modalContent.video,
                        playlistDispatch,
                        playlist.title
                      );
                    } else {
                      deleteFromPlaylist(
                        token,
                        modalContent.video._id,
                        playlist._id,
                        playlistDispatch,
                        playlist.title,
                        modalContent.video.title
                      );
                    }
                  }}
                />{' '}
                <span>{playlist.title}</span>
              </div>
            );
          })
        )}
        <button
          className="playlist-btn btn primary-btn"
          onClick={() => setDisplayInput(prev => !prev)}
        >
          Add playlist
        </button>
        {displayInput && (
          <div className="playlist-footer">
            <form class="form">
              <input
                id="description"
                type="text"
                class="form-input small-text"
                name="title"
                placeholder="Please enter a Title"
                value={playlist.title}
                onChange={e =>
                  setPlaylist(prevState => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </form>

            <form class="form">
              <input
                id="description"
                type="text"
                class="form-input small-text"
                placeholder="Please enter your description"
                value={playlist.description}
                onChange={e =>
                  setPlaylist(prevState => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </form>

            <button
              className="primary-btn create-btn"
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
