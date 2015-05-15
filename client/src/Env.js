var Surface = require('famous/core/Surface');

function Env() {
  var self = this;
  self.view = new Surface({
    content: 'envelope editor',
    properties: {
      backgroundColor: '#aca',
    },
  });
  return self;
}

module.exports = Env;
