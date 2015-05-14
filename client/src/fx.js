var Surface = require('famous/core/Surface');

function fx() {
  var fx = new Surface({
    content: 'master + secondary fx tracks',
    properties: {
      backgroundColor: '#aac',
    },
  });
  return fx;
}

module.exports = fx;
