import React, { useState } from 'react';
import { useAuth } from '../../../../../context/auth/authContext';
import { useNote } from '../../../../../context/notes/noteContext';
import { deleteNote } from '../../../../../service';
import { getIcons, getTimeStamp } from './../../../../../util';
function Note({ timeStamp, noteDescription, _id }) {
  const { authState } = useAuth();
  const { noteDispatch } = useNote();
  return (
    <div className="note-container">
      <div>{noteDescription}</div>

      <div className="note-time">
        <span className="time-icon">{getIcons('TIME', '15px')}</span>
        <span className="text-muted">{getTimeStamp(timeStamp)}</span>
      </div>
      <div
        className="delete-icon"
        onClick={() => {
          deleteNote(_id, authState.token, noteDispatch);
        }}
      >
        <span>{getIcons('DELETE', '18px')}</span>
      </div>
    </div>
  );
}

export default Note;
