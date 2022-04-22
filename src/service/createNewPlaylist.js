import axios from 'axios';
import { toast } from 'react-toastify';
const createNewPlaylist = async (token, playlist, playlistDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/playlists',
      headers: { authorization: token },
      data: { playlist },
    });
    if (response.status === 201) {
      toast.success(`${playlist.title} playlist has been created  `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      playlistDispatch({
        type: 'ADD_NEW_PLAYLIST',
        payload: response.data.playlists,
      });
    }
  } catch (err) {
    console.log('error in create new playlist', err);
  }
};
export { createNewPlaylist };
