import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdPlaylistAdd,
  MdHistory,
  MdOutlineWatchLater,
  MdFilterList,
  MdHome,
  MdVideoLibrary,
} from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

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
    case 'HOME':
      return (
        <span style={{ fontSize: size }}>
          <MdHome />
        </span>
      );
    case 'LIBRARY':
      return (
        <span style={{ fontSize: size }}>
          <MdVideoLibrary />
        </span>
      );
    case 'VIDEO_MENU':
      return (
        <span style={{ fontSize: size }}>
          <BsThreeDotsVertical />
        </span>
      );
    default:
      return new Error('nothing was returned');
  }
};

export { getIcons };
