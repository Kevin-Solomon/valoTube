import axios from 'axios';
const getPlaylistItems = async (playlistId, token, setVideos) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/user/playlists/${playlistId}`,
      headers: { authorization: token },
    });
    console.log(response);
    setVideos(response.data.playlist.videos);
  } catch (err) {
    console.log('error in get playlist item ', err);
  }
};

export { getPlaylistItems };
