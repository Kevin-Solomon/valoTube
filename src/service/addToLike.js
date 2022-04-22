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
    console.log(response);
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
    console.error(err);
  }
};
export { addToLike };
