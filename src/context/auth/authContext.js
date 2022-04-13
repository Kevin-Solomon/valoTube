import { createContext, useContext, useReducer } from 'react';
import { authReducer, initialAuthState } from '../../reducer';
const AuthContext = createContext({ user: null, token: null });

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
