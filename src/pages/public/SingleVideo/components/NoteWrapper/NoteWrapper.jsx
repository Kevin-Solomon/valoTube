import React, { useState } from 'react';
import { useAuth } from '../../../../../context/auth/authContext';
import { useNote } from '../../../../../context/notes/noteContext';
import { addNote } from '../../../../../service';
import { getIcons, getTimeStamp } from '../../../../../util';
import { useNavigate } from 'react-router-dom';
import Note from '../Note/Note';
import './NoteWrapper.css';
function NoteWrapper({ videoId, timeStamp }) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { noteState, noteDispatch } = useNote();
  const noteForVideo = noteState.filter(note => note.videoId === videoId);
  console.log(noteState);
  const [noteDescription, setNoteDescription] = useState('');
  return (
    <div className="note-wrapper">
      <h4>Notes</h4>
      <textarea
        className="notes"
        value={noteDescription}
        onChange={e => setNoteDescription(e.target.value)}
      />
      <button
        className="btn primary-btn"
        onClick={() => {
          addNote(
            authState.token,
            { noteDescription, timeStamp },
            videoId,
            noteDispatch,
            navigate
          );
        }}
      >
        Save
      </button>
      <div className="note-display">
        {noteForVideo.map(note => {
          return <Note {...note} />;
        })}
        {/* <div className="note-container">
          <div>asdasd</div>
          <div className="note-time">
            <span className="time-icon">{getIcons('TIME', '15px')}</span>
            <span className="text-muted">{getTimeStamp(200)}</span>
          </div>
          <div>
            <span>{getIcons('DELETE', '18px')}</span>
            <span>{getIcons('EDIT', '18px')}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NoteWrapper;
