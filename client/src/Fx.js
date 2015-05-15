var Surface = require('famous/core/Surface');

function Fx() {
  var self = this;
  self.view = new Surface({
    content: 'master + secondary fx tracks',
    properties: {
      backgroundColor: '#aac',
    },
  });
  return self;
}

module.exports = Fx;
