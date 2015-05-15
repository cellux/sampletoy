var Surface = require('famous/core/Surface');

function env() {
  var self = {};
  self.view = new Surface({
    content: 'envelope editor',
    properties: {
      backgroundColor: '#aca',
    },
  });
  return self;
}

module.exports = env;
