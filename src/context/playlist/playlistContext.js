import { createContext, useContext, useReducer, useEffect } from 'react';
import { playlistReducer, initialPlaylistState } from './../../reducer';
import { getPlaylist } from '../../service';
import { useAuth } from '../auth/authContext';
const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialPlaylistState
  );
  useEffect(() => {
    getPlaylist(token);
  }, [token]);
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
