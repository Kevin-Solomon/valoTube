import axios from 'axios';

const createNewPlaylist = async (token, playlist, playlistDispatch) => {
  const response = await axios({
    method: 'POST',
    url: '/api/user/playlists',
    headers: { authorization: token },
    data: { playlist },
  });
  console.log(response);
  playlistDispatch({
    type: 'ADD_NEW_PLAYLIST',
    payload: response.data.playlists,
  });
};
export { createNewPlaylist };
