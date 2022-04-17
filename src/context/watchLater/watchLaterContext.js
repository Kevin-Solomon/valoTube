import { createContext, useContext, useReducer, useEffect } from 'react';
import { watchLaterReducer, initialWatchLaterState } from '../../reducer';
import { getWatchLater } from '../../service';
import { useAuth } from '../auth/authContext';
const WatchLaterContext = createContext({ watchLater: [] });

const WatchLaterProvider = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initialWatchLaterState
  );
  useEffect(() => {
    getWatchLater(token, watchLaterDispatch);
  }, [token]);
  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
