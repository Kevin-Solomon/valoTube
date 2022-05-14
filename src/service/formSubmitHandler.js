import axios from 'axios';
import { toast } from 'react-toastify';
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
        toast.success(`Welcome ${response.data.foundUser.firstName} `, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        authDispatch({ type: 'LOGIN', payload: response.data });
      } else if (response.status === 201) {
        resolve(response.status);
        toast.success(`Welcome ${response.data.createdUser.name} `, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        authDispatch({ type: 'SIGNUP', payload: response.data });
      } else {
        resolve(response.status);
      }
    });
  } catch (err) {
    toast.error(err.response.data.errors[0], {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
export { formSubmitHandler };
