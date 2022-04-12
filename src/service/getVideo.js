import axios from 'axios';

async function getVideo(_id) {
  const response = await axios({
    method: 'GET',
    url: `/api/video/${_id}`,
    headers: {
      Accept: 'application/json',
    },
  });
  return response.data.video;
}

export { getVideo };
