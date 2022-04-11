const getLastPosted = date => {
  const difference = new Date() - new Date(date);
  const hours = difference / 3600000;
  if (hours > 8760) return `${(hours / 8760).toFixed()} years ago`;
  if (hours > 730) return `${(hours / 730).toFixed()} months ago`;
  if (hours > 24) return `${(hours / 24).toFixed()} days ago`;
};

export { getLastPosted };
