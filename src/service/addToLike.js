import axios from 'axios';
import { toast } from 'react-toastify';
const addToLike = async (token, video, likeDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/likes',
      data: { video },
      headers: { authorization: token },
    });
    if (response.status === 201) {
      toast.success(`${video.title} saved to liked videos `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      likeDispatch({ type: 'ADD_TO_LIKE', payload: response.data.likes });
    }
    if (response.status === 409) {
      return null;
    }
  } catch (err) {
    if (err.response.status === 500) {
      toast.error(`Please Login / Sign Up to use this feature`, {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  }
};
export { addToLike };
