const initialHistoryState = { history: [] };
const historyReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { history: [...payload] };
    default:
      return new Error('Something went wrong in history reducer');
  }
};

export { historyReducer, initialHistoryState };
