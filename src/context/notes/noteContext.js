import { useContext, useReducer, createContext, useEffect } from 'react';
import { initialNoteState, noteReducer } from '../../reducer';
import axios from 'axios';
import { useAuth } from '../auth/authContext';
const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const { authState } = useAuth();
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNoteState);
  useEffect(() => {
    async function getNotes() {
      const response = await axios({
        method: 'GET',
        url: '/api/user/notes/',
        headers: { authorization: authState.token },
      });
      noteDispatch({ type: 'INITIAL', payload: response.data.notes });
    }
    getNotes();
  }, [authState.token]);

  return (
    <NoteContext.Provider value={{ noteDispatch, noteState }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => useContext(NoteContext);
