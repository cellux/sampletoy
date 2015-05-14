var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');

function grid() {
  var pos = 0;
  var self = new View();
  var grid = new Surface({
    content: 'grid',
    properties: {
      backgroundColor: '#ccc',
    },
  });
  self.add(grid);
  var line = new Surface({
    size: [1, undefined],
    properties: {
      backgroundColor: '#000',
    },
  });
  var lineMover = new Modifier({
    opacity: 0.25
  })
  .alignFrom(function () {
    return [pos,0];
  });
  self.add(lineMover).add(line);
  self.on('position-change', function(t, o) {
    pos = o.value;
  });
  return self;
}

module.exports = grid;
