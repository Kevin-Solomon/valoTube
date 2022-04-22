import axios from 'axios';

const getPlaylist = async token => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/user/playlists',
      headers: { authorization: token },
    });
  } catch (err) {
    console.log('error in get playlist', err);
  }
};
export { getPlaylist };
