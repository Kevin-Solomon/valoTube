import axios from 'axios';
import { toast } from 'react-toastify';
const addToPlaylist = async (
  _id,
  token,
  video,
  playlistDispatch,
  playlistTitle
) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `/api/user/playlists/${_id}`,
      headers: { authorization: token },
      data: { video },
    });
    if (response.status === 201) {
      toast.success(`${video.title} has been included to ${playlistTitle} `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      playlistDispatch({
        type: 'ADD_VIDEO_TO_PLAYLIST',
        payload: response.data.playlist,
      });
    }
  } catch (err) {
    console.log('error in add to playlist function ', err);
  }
};
export { addToPlaylist };
