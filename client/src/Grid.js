var events = require('events');
var util = require('util');

var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');
var Draggable = require('famous/modifiers/Draggable');

function clamp(val, min, max) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

function GridEvent(parent, instr, pos) {
  events.EventEmitter.call(this);
  var self = this;
  self.parent = parent;
  self.instr = instr;
  self.pos = pos;
  self.size = [16,16];
  var modifier = new Modifier();
  modifier.alignFrom(function () {
    return self.pos;
  });
  var draggable = new Draggable();
  draggable.on('start', function () {
    var parentSize = self.parent.getSize();
    if (parentSize) {
      var pw = parentSize[0];
      var ph = parentSize[1];
      self.draggable.setOptions({
        xRange: [-(self.pos[0] * pw), (1-self.pos[0]) * pw],
        yRange: [-(self.pos[1] * ph), (1-self.pos[1]) * ph - self.size[1]],
      });
    }
  });
  draggable.on('end', function(data) {
    var parentSize = self.parent.getSize();
    if (parentSize) {
      var pw = parentSize[0];
      var ph = parentSize[1];
      self.pos[0] += (data.position[0] / pw);
      self.pos[1] += (data.position[1] / ph);
      self.pos[0] = clamp(self.pos[0], 0, 1);
      self.pos[1] = clamp(self.pos[1], 0, 1);
      self.draggable.setPosition([0,0]);
    }
  });
  var surface = new Surface({
    size: self.size,
    properties: {
      backgroundColor: '#008',
    },
  });
  surface.pipe(draggable);
  self.draggable = draggable;
  self.view = new View();
  self.view.add(modifier).add(draggable).add(surface);
}

util.inherits(GridEvent, events.EventEmitter);

function Grid() {
  events.EventEmitter.call(this);
  var self = this;
  self.events = [];
  self.pos = 0;
  self.resolution = 128;
  self.freeEvents = [];
  self.view = new View();
  var grid = new Surface({
    content: 'grid',
    properties: {
      backgroundColor: '#ccc',
    },
  });
  self.gridSurface = grid;
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
    return [self.pos,0];
  });
  self.view.add(lineMover).add(line);
}

util.inherits(Grid, events.EventEmitter);

Grid.prototype.add = function (instr, x, y) {
  var pos = [x * (1.0 / this.resolution), y || 0];
  var event;
  if (this.freeEvents.length) {
    event = this.freeEvents.pop();
    event.instr = instr;
    event.pos = pos;
  }
  else {
    event = new GridEvent(this, instr, pos);
    this.view.add(event.view);
  }
  this.events.push(event);
  return event;
};

Grid.prototype.getSize = function () {
  return this.gridSurface.getSize();
}

module.exports = Grid;
