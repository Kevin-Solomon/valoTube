const initialModalState = { display: false, video: null };

const modalReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_MODAL':
      return { display: true, video: payload };
    case 'CLOSE_MODAL':
      return { display: false, video: null };
    default:
      return new Error('Error in Modal reducer');
  }
};
export { modalReducer, initialModalState };
