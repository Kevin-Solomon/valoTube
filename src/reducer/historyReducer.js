const initialHistoryState = { history: [] };
const historyReducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case 'INITIAL':
      return { history: [...payload] };
    case 'ADD_TO_HISTORY':
      return { history: [...payload] };
    case 'DELETE_FROM_HISTORY':
      return { history: [...payload] };
    default:
      return new Error('Something went wrong in history reducer');
  }
};

export { historyReducer, initialHistoryState };
