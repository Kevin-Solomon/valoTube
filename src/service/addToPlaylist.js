import axios from 'axios';
const addToPlaylist = async (_id, token, video, playlistDispatch) => {
  const response = await axios({
    method: 'POST',
    url: `/api/user/playlists/${_id}`,
    headers: { authorization: token },
    data: { video },
  });
  playlistDispatch({
    type: 'ADD_VIDEO_TO_PLAYLIST',
    payload: response.data.playlist,
  });
};
export { addToPlaylist };
