import axios from 'axios';

const initialGetLikeVideos = async (token, likeDispatch) => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/user/likes',
      headers: { authorization: token },
    });
    likeDispatch({ type: 'INITIAL', payload: response.data.likes });
  } catch (err) {
    console.error(err);
  }
};
export { initialGetLikeVideos };
