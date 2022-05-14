export const getTimeStamp = seconds => {
  const minute = Math.floor(seconds / 60);
  const second = seconds - minute * 60;
  return `${minute} : ${second < 10 ? `0${second}` : second}`;
};
