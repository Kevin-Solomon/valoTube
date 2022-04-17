import { createContext, useContext, useReducer, useEffect } from 'react';
import { watchLaterReducer, initialWatchLaterState } from '../../reducer';
const WatchLaterContext = createContext({ watchLater: [] });

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initialWatchLaterState
  );
  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
