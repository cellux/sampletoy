var Surface = require('famous/core/Surface');

function instr() {
  var self = {};
  self.view = new Surface({
    content: 'instruments',
    properties: {
      backgroundColor: '#caa',
    },
  });
  return self;
}

module.exports = instr;
