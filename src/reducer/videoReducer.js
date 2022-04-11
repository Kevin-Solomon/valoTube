const initialVideoState = { videos: [] };
const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { videos: [...payload] };
    default:
      return new Error('Something wrong in video reducer');
  }
};

export { initialVideoState, videoReducer };
