export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return { user: payload.foundUser, token: payload.encodedToken };
    case 'SIGNUP':
      return { user: payload.createdUser, token: payload.encodedToken };
    default:
      return new Error('Something went wrong in auth reducer');
  }
};

export const initialAuthState = { user: null, token: null };
