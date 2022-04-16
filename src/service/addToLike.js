import axios from 'axios';
const addToLike = async (token, video, likeDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/likes',
      data: { video },
      headers: { authorization: token },
    });
    if (response.status === 201) {
      likeDispatch({ type: 'ADD_TO_LIKE', payload: response.data.likes });
    }
    if (response.status === 409) {
      return null;
    }
  } catch (err) {
    console.error(err);
  }
};
export { addToLike };
