import axios from 'axios';
import { toast } from 'react-toastify';
const deleteAllFromHistory = async (token, historyDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: '/api/user/history/all',
      headers: { authorization: token },
    });
    if (response.status === 200) {
      toast.error(`All videos have been deleted from your history`, {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      historyDispatch({ type: 'DELETE_ALL', payload: response.data.history });
    }
  } catch (err) {
    console.error(err);
  }
};
export { deleteAllFromHistory };
