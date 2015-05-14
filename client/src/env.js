var Surface = require('famous/core/Surface');

function env() {
  var env = new Surface({
    content: 'envelope editor',
    properties: {
      backgroundColor: '#aca',
    },
  });
  return env;
}

module.exports = env;
