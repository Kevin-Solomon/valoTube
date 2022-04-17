const initialWatchLaterState = { watchLater: [] };
const watchLaterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { watchLater: [...payload] };
    default:
      return new Error('Something went wrong in watch later reducer');
  }
};

export { watchLaterReducer, initialWatchLaterState };
