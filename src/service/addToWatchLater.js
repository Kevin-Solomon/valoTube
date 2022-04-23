import axios from 'axios';
import { toast } from 'react-toastify';
const addToWatchLater = async (video, token, watchLaterDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/watchlater',
      data: { video },
      headers: { authorization: token },
    });
    if (response.status === 201) {
      toast.success(`${video.title} has been included in watch later`, {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      watchLaterDispatch({
        type: 'ADD_TO_WATCH_LATER',
        payload: response.data.watchlater,
      });
    }
  } catch (err) {
    if ('response' in err) console.error(err);
    if (err.response.status === 409) {
      toast.error(`${video.title} already exists in watch later`, {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
    if (err.response.status === 500) {
      toast.error(`Please Login to use this feature`, {
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
export { addToWatchLater };
