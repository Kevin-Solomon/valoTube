import axios from 'axios';

async function getVideos() {
  const response = await axios({
    method: 'GET',
    url: '/api/videos',
    headers: {
      Accept: 'application/json',
    },
  });
  return response.data.videos;
}

export { getVideos };
