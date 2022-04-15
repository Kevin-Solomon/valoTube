import axios from 'axios';
const deleteAllFromHistory = async (token, historyDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: '/api/user/history/all',
      headers: { authorization: token },
    });
    if (response.status === 200) {
      historyDispatch({ type: 'DELETE_ALL', payload: response.data.history });
    }
  } catch (err) {
    console.error(err);
  }
};
export { deleteAllFromHistory };
