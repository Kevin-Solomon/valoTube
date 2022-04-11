import React from 'react';
import './NoteWrapper.css';
function NoteWrapper() {
  return (
    <div className="note-wrapper">
      <h4>Notes</h4>
      <textarea className="notes"></textarea>
      <button className="btn primary-btn">Save</button>
    </div>
  );
}

export default NoteWrapper;
