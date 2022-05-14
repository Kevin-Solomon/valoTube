import axios from 'axios';
import { toast } from 'react-toastify';
const addNote = async (token, data, _id, noteDispatch, navigate) => {
  console.log(token);
  try {
    const response = await axios({
      method: 'POST',
      url: `/api/user/notes/${_id}`,
      data: { newNote: data },
      headers: { authorization: token },
    });
    console.log(response);
    noteDispatch({ type: 'ADD_NOTE', payload: response.data.notes });
  } catch (err) {
    console.log(err.response);
    if (err.response.status === 500) {
      toast.error(`Please Login / Sign Up to use this feature`, {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      navigate('/login');
    }
  }
};
export { addNote };
