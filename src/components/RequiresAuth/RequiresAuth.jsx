import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

function RequiresAuth({ children }) {
  const { authState } = useAuth();
  const location = useLocation();

  return authState.token === null ? (
    <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
  ) : (
    children
  );
}

export default RequiresAuth;
