import axios from 'axios';
const deletePlaylist = async (_id, token, playlistDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/playlists/${_id}`,
      headers: { authorization: token },
    });
    playlistDispatch({
      type: 'DELETE_PLAYLIST',
      payload: response.data.playlists,
    });
  } catch (err) {
    console.log('error in delete playlist', err);
  }
};
export { deletePlaylist };
