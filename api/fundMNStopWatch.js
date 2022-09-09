const fundMNStopWatch = require('../src/module/fundMNStopWatch.js');

module.exports = async function handler(request, response) {
  const data = await fundMNStopWatch(request.query);
  response.status(200).json(data);
};
