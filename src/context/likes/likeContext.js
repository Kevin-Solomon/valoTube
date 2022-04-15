import { createContext, useContext, useEffect, useReducer } from 'react';
import { likeReducer, initialLikeState } from '../../reducer';
const LikeContext = createContext({ likedVideos: [] });

const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, initialLikeState);
  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};
const useLike = () => useContext(LikeContext);

export { LikeProvider, useLike };
