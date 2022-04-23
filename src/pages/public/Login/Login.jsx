import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth/authContext';
import { formSubmitHandler } from '../../../service';
import './Login.css';

export const Login = () => {
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const loginHandler = async e => {
    e.preventDefault();
    try {
      const response = await formSubmitHandler(
        '/api/auth/login',
        user,
        authDispatch
      );
      if (response === 200) {
        navigate('/', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={e => loginHandler(e)}>
          <label htmlFor="email-input"> Email Address </label>
          <input
            value={user.email}
            id="email-input"
            className="form-input"
            type="email"
            name="email"
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <label htmlFor="password-input"> Password </label>
          <input
            value={user.password}
            name="password"
            id="password-input"
            className="form-input"
            type="password"
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <button className="btn primary-btn" type="submit">
            Login
          </button>
          <button
            className="btn primary-btn"
            onClick={() => {
              setUser({
                email: 'adarshbalika@gmail.com',
                password: 'adarshBalika123',
              });
            }}
          >
            Login with test credentials
          </button>
          <Link to="/signup">Don't Have an Account</Link>
        </form>
      </div>
    </div>
  );
};
