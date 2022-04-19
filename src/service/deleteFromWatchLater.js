import axios from 'axios';
const deleteFromWatchLater = async (_id, token, watchLaterDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/watchlater/${_id}`,
      headers: { authorization: token },
    });
    watchLaterDispatch({
      type: 'DELETE_FROM_WATCH_LATER',
      payload: response.data.watchlater,
    });
  } catch (err) {
    if ('response' in err) console.error(err.response);
  }
};
export { deleteFromWatchLater };
