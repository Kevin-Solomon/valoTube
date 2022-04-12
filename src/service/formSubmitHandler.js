import axios from 'axios';
const formSubmitHandler = async (url, user, authDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: url,
      data: user,
    });
    return new Promise(resolve => {
      if (response.status === 200) {
        resolve(response.status);
        authDispatch({ type: 'LOGIN', payload: response.data });
      } else if (response.status === 201) {
        resolve(response.status);
        authDispatch({ type: 'SIGNUP', payload: response.data });
      } else {
        resolve(response.status);
      }
    });
  } catch (err) {
    console.error(err);
  }
};
export { formSubmitHandler };
