import axios from 'axios';

const initialGetLikeVideos = async token => {
  const response = await axios({
    method: 'GET',
    url: '/api/user/likes',
    headers: { authorization: token },
  });
  console.log(response);
};
export { initialGetLikeVideos };
