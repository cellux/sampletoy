var Surface = require('famous/core/Surface');

function fx() {
  var self = {};
  self.view = new Surface({
    content: 'master + secondary fx tracks',
    properties: {
      backgroundColor: '#aac',
    },
  });
  return self;
}

module.exports = fx;
