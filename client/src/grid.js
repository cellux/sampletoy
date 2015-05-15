var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');

function grid() {
  var self = {};
  var pos = 0;
  self.view = new View();
  var grid = new Surface({
    content: 'grid',
    properties: {
      backgroundColor: '#ccc',
    },
  });
  self.view.add(grid);
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
  self.view.add(lineMover).add(line);
  self.view.on('position-change', function(t, o) {
    pos = o.value;
  });
  return self;
}

module.exports = grid;
