import axios from 'axios';

const addToHistory = async (video, token, historyDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/history',
      data: { video },
      headers: { authorization: token },
    });
    if (response.status === 201) {
      historyDispatch({
        type: 'ADD_TO_HISTORY',
        payload: response.data.history,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { addToHistory };
