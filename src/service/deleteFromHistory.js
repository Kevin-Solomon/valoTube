import axios from 'axios';
import { toast } from 'react-toastify';
const deleteFromHistory = async (_id, token, historyDispatch, title) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/history/${_id}`,
      headers: { authorization: token },
    });
    toast.error(`${title} has been deleted from you histroy `, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    historyDispatch({
      type: 'DELETE_FROM_HISTORY',
      payload: response.data.history,
    });
  } catch (err) {
    console.error(err.response);
  }
};
export { deleteFromHistory };
