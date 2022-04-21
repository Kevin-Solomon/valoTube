const initialPlaylistState = { playlist: [] };
const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL':
      return { playlist: [...payload] };
    case 'ADD_NEW_PLAYLIST':
      return { playlist: [...payload] };
    case 'ADD_VIDEO_TO_PLAYLIST':
      return {
        playlist: state.playlist.reduce((acc, val) => {
          if (val.title === payload.title) return [...acc, { ...payload }];
          return [...acc, { ...val }];
        }, []),
      };
    case 'DELETE_FROM_PLAYLIST':
      return {
        playlist: state.playlist.reduce((acc, val) => {
          if (val.title === payload.title) return [...acc, { ...payload }];
          return [...acc, { ...val }];
        }, []),
      };
  }
};
export { playlistReducer, initialPlaylistState };
