import { createContext, useContext, useEffect, useReducer } from 'react';
import { likeReducer, initialLikeState } from '../../reducer';
import { initialGetLikeVideos } from '../../service';
import { useAuth } from '../auth/authContext';
const LikeContext = createContext({ likedVideos: [] });

const LikeProvider = ({ children }) => {
  const { authState } = useAuth();
  const [likeState, likeDispatch] = useReducer(likeReducer, initialLikeState);
  useEffect(() => {
    initialGetLikeVideos(authState.token, likeDispatch);
  }, [authState.token]);
  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};
const useLike = () => useContext(LikeContext);

export { LikeProvider, useLike };
