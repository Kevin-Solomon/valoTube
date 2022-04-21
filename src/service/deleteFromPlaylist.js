import axios from 'axios';
const deleteFromPlaylist = async (
  token,
  videoId,
  playlistId,
  playlistDispatch
) => {
  const response = await axios({
    method: 'DELETE',
    url: `/api/user/playlists/${playlistId}/${videoId}`,
    headers: { authorization: token },
  });
  console.log(response);
  playlistDispatch({
    type: 'DELETE_FROM_PLAYLIST',
    payload: response.data.playlist,
  });
};
export { deleteFromPlaylist };
