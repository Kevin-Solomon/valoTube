import axios from 'axios';

const addToWatchLater = async (video, token, watchLaterDispatch) => {
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
};
export { addToWatchLater };
