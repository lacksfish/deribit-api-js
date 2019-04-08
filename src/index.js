var bluebird = require('bluebird');

module.exports = {
  RestClient: bluebird.promisifyAll(require("./RestClient"))
};
