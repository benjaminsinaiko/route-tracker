export default timestamp => {
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
