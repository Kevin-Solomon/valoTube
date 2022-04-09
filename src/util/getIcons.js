import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdPlaylistAdd,
  MdHistory,
  MdOutlineWatchLater,
  MdFilterList,
} from 'react-icons/md';

AiOutlineLike;
AiOutlineDislike;
const getIcons = (type, size) => {
  switch (type) {
    case 'HISTORY':
      return (
        <span style={{ fontSize: size }}>
          <MdHistory />
        </span>
      );
    case 'WATCH_LATER':
      return (
        <span style={{ fontSize: size }}>
          <MdOutlineWatchLater />
        </span>
      );
    case 'PLAYLIST_ADD':
      return (
        <span style={{ fontSize: size }}>
          <MdPlaylistAdd />
        </span>
      );
    case 'FILTER':
      return (
        <span style={{ fontSize: size }}>
          <MdFilterList />
        </span>
      );
  }
};
