const initialLikeState = { likedVideo: [] };

const likeReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { likedVideo: [...payload] };
    case 'ADD_TO_LIKE':
      return { likedVideo: [...payload] };
    case 'DELETE_FROM_LIKE':
      return { likedVideo: [...payload] };
    default:
      return new Error('Something went wrong in like reducer');
  }
};

export { likeReducer, initialLikeState };
