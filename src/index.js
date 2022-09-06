const { getModules } = require('./utils');

const modules = {};
getModules().forEach(({ fileName, path }) => {
  modules[fileName] = require(path);
});
module.exports = modules;
