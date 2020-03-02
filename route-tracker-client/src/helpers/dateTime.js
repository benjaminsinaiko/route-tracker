export const dateFormat = timestamp => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const routeDuration = (timestampFirst, timestampLast) => {
  const difference = timestampLast - timestampFirst;
  const hrsDiff = Math.floor(difference / 1000 / 60 / 60);
  const minsDiff = Math.floor(difference / 1000 / 60);
  const secsDiff = Math.floor(difference / 1000);

  return [hrsDiff, minsDiff, secsDiff];
};
