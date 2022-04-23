import axios from 'axios';
import { toast } from 'react-toastify';
const deleteFromLiked = async (_id, token, likeDispatch, title) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/likes/${_id}`,
      headers: { authorization: token },
    });
    if (response.status === 200) {
      toast.error(`${title} removed from liked videos `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      likeDispatch({ type: 'DELETE_FROM_LIKE', payload: response.data.likes });
    }
  } catch (err) {
    console.error(err);
  }
};
export { deleteFromLiked };
