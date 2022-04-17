import axios from 'axios';

const deleteFromLiked = async (_id, token, likeDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/likes/${_id}`,
      headers: { authorization: token },
    });
    if (response.status === 200) {
      likeDispatch({ type: 'DELETE_FROM_LIKE', payload: response.data.likes });
    }
  } catch (err) {
    console.error(err);
  }
};
export { deleteFromLiked };
