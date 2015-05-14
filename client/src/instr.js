var Surface = require('famous/core/Surface');

function instr() {
  var instr = new Surface({
    content: 'instruments',
    properties: {
      backgroundColor: '#caa',
    },
  });
  return instr;
}

module.exports = instr;
