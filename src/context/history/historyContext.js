import { createContext, useContext, useReducer, useEffect } from 'react';
import { historyReducer, initialHistoryState } from '../../reducer';
const HistoryContext = createContext({ history: [] });
import axios from 'axios';
import { useAuth } from '../auth/authContext';
const HistoryProvider = ({ children }) => {
  const { authState } = useAuth();
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialHistoryState
  );
  useEffect(() => {
    const getHistory = async () => {
      const response = await axios({
        method: 'GET',
        url: '/api/user/history',
        headers: { authorization: authState.token },
      });
      historyDispatch({ type: 'INITIAL', payload: response.data.history });
    };
    getHistory();
  }, [authState.token]);
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
