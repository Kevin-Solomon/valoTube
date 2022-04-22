const checkVideoExists = (video, playlist) => {
  return playlist.videos.some(item => item._id === video._id);
};
export { checkVideoExists };
