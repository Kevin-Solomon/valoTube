const initialVideoState = { videos: [] };
const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { videos: [...payload] };
  }
};

export { initialVideoState, videoReducer };
