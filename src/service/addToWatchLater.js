import axios from 'axios';

const addToWatchLater = async (video, token, watchLaterDispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/watchlater',
      data: { video },
      headers: { authorization: token },
    });
    watchLaterDispatch({
      type: 'ADD_TO_WATCH_LATER',
      payload: response.data.watchlater,
    });
  } catch (err) {
    if ('response' in err) console.error(err);
  }
};
export { addToWatchLater };
