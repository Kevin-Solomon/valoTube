import axios from 'axios';

const getPlaylist = async token => {
  const response = await axios({
    method: 'GET',
    url: '/api/user/playlists',
    headers: { authorization: token },
  });
  console.log(response);
};
export { getPlaylist };
