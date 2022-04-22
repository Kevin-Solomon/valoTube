import axios from 'axios';
const deleteFromPlaylist = async (
  token,
  videoId,
  playlistId,
  playlistDispatch
) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/playlists/${playlistId}/${videoId}`,
      headers: { authorization: token },
    });
    playlistDispatch({
      type: 'DELETE_FROM_PLAYLIST',
      payload: response.data.playlist,
    });
  } catch (err) {
    console.log('error in delete from playlist ', err);
  }
};
export { deleteFromPlaylist };
