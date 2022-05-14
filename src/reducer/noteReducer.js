export const initialNoteState = [];
const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const INITIAL = 'INITIAL';
export const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case INITIAL:
      return [...payload];
    case ADD_NOTE:
      return [...payload];
    case DELETE_NOTE:
      return [...payload];
    default:
      return new Error('Error in note reducer');
  }
};
