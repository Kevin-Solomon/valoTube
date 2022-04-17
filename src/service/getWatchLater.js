import axios from 'axios';

const getWatchLater = async (token, watchLaterDispatch) => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/user/watchlater',
      headers: { authorization: token },
    });
    watchLaterDispatch({ type: 'INITIAL', payload: response.data.watchlater });
  } catch (err) {
    if ('response' in err) console.error(err.response);
  }
};
export { getWatchLater };
