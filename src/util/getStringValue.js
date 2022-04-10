const getStringValue = count => {
  if (count > 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count > 1000) return `${(count / 1000).toFixed(0)}K`;
};
export { getStringValue };
