function log(...arg) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.log(...arg);
}

module.exports = {
  log,
};
