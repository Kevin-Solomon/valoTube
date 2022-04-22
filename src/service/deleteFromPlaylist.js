import axios from 'axios';
import { toast } from 'react-toastify';
const deleteFromPlaylist = async (
  token,
  videoId,
  playlistId,
  playlistDispatch,
  playlistTitle,
  videoTitle
) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/playlists/${playlistId}/${videoId}`,
      headers: { authorization: token },
    });
    if (response.status === 200) {
      toast.error(`${videoTitle} has deleted from ${playlistTitle} `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      playlistDispatch({
        type: 'DELETE_FROM_PLAYLIST',
        payload: response.data.playlist,
      });
    }
  } catch (err) {
    console.log('error in delete from playlist ', err);
  }
};
export { deleteFromPlaylist };
