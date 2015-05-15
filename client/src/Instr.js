var Surface = require('famous/core/Surface');

function Instr() {
  var self = this;
  self.view = new Surface({
    content: 'instruments',
    properties: {
      backgroundColor: '#caa',
    },
  });
  return self;
}

module.exports = Instr;
