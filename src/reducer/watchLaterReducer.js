const initialWatchLaterState = { watchLater: [] };
const watchLaterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { watchLater: [...payload] };
    case 'ADD_TO_WATCH_LATER':
      return { watchLater: [...payload] };
    case 'DELETE_FROM_WATCH_LATER':
      return { watchLater: [...payload] };
    default:
      return new Error('Something went wrong in watch later reducer');
  }
};

export { watchLaterReducer, initialWatchLaterState };
