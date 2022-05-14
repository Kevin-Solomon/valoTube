import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdPlaylistAdd,
  MdHistory,
  MdOutlineWatchLater,
  MdFilterList,
  MdHome,
  MdVideoLibrary,
  MdClear,
  MdDeleteOutline,
  MdWatchLater,
  MdEdit,
} from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLike, AiOutlineDislike, AiFillLike } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';

const getIcons = (type, size) => {
  const style = { fontSize: size, cursor: 'pointer' };
  switch (type) {
    case 'HISTORY':
      return (
        <span style={style}>
          <MdHistory />
        </span>
      );
    case 'WATCH_LATER':
      return (
        <span style={style}>
          <MdOutlineWatchLater />
        </span>
      );
    case 'WATCH_LATER_FILL':
      return (
        <span style={style}>
          <MdWatchLater />
        </span>
      );
    case 'PLAYLIST_ADD':
      return (
        <span style={style}>
          <MdPlaylistAdd />
        </span>
      );
    case 'FILTER':
      return (
        <span style={style}>
          <MdFilterList />
        </span>
      );
    case 'HOME':
      return (
        <span style={style}>
          <MdHome />
        </span>
      );
    case 'LIBRARY':
      return (
        <span style={style}>
          <MdVideoLibrary />
        </span>
      );
    case 'VIDEO_MENU':
      return (
        <span style={style}>
          <BsThreeDotsVertical />
        </span>
      );
    case 'HAMBURGER':
      return (
        <span style={style}>
          <GiHamburgerMenu />
        </span>
      );
    case 'LIKE':
      return (
        <span style={style}>
          <AiOutlineLike />
        </span>
      );
    case 'LIKE_FILL':
      return (
        <span style={style}>
          <AiFillLike />
        </span>
      );
    case 'CLEAR':
      return (
        <span style={style}>
          <MdClear />
        </span>
      );
    case 'DELETE':
      return (
        <span style={style}>
          <MdDeleteOutline />
        </span>
      );
    case 'TIME':
      return (
        <span style={style}>
          <BiTimeFive />
        </span>
      );
    case 'EDIT':
      return (
        <span style={style}>
          <MdEdit />
        </span>
      );
    default:
      return new Error('nothing was returned');
  }
};

export { getIcons };
