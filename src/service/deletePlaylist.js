import axios from 'axios';
import { toast } from 'react-toastify';
const deletePlaylist = async (_id, token, playlistDispatch, title) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/playlists/${_id}`,
      headers: { authorization: token },
    });
    if (response.status === 200) {
      toast.error(`${title} playlist has been deleted `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      playlistDispatch({
        type: 'DELETE_PLAYLIST',
        payload: response.data.playlists,
      });
    }
  } catch (err) {
    console.log('error in delete playlist', err);
  }
};
export { deletePlaylist };
