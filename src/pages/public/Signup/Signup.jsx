import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth/authContext';
import { formSubmitHandler } from '../../../service';

export const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { authDispatch } = useAuth();
  const signupHandler = async e => {
    e.preventDefault();
    try {
      const response = await formSubmitHandler(
        '/api/auth/signup',
        user,
        authDispatch
      );
      if (response === 201) {
        navigate('/', { replace: true });
      } else if (response === 422) {
        alert('Email already exists');
      } else {
        alert('Somethig went wrong in signup handler');
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign Up</h2>
        <form onSubmit={e => signupHandler(e)}>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            name="name"
            value={user.name}
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            className="form-input"
            type="text"
            required
          />
          <label htmlFor="email"> Email Address </label>
          <input
            id="email"
            name="email"
            value={user.email}
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            className="form-input"
            type="email"
            required
          />
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            name="password"
            value={user.password}
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            className="form-input"
            type="password"
            required
          />

          <button className="btn primary-btn" type="submit">
            Sign Up
          </button>
          <p>
            <Link to="/login">Already have an Account ?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
