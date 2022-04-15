import axios from 'axios';

const deleteFromHistory = async (_id, token, historyDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/history/${_id}`,
      headers: { authorization: token },
    });
    historyDispatch({
      type: 'DELETE_FROM_HISTORY',
      payload: response.data.history,
    });
  } catch (err) {
    console.error(err.response);
  }
};
export { deleteFromHistory };
