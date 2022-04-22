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
        console.log(response);
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
    if (err.response.status === 422) {
      toast.error(`Email Already exist !`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (err.response.status === 401) {
      toast.error(`The credentials are invalid`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (err.response.status === 404) {
      toast.error(`The email you entered is not Registered !`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
};
export { formSubmitHandler };
