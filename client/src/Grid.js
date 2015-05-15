var events = require('events');
var util = require('util');

var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');
var Draggable = require('famous/modifiers/Draggable');

function GridEvent(instr, pos) {
  events.EventEmitter.call(this);
  var self = this;
  self.instr = instr;
  self.pos = pos;
  var modifier = new Modifier();
  modifier.alignFrom(function () {
    return [self.pos, 0];
  });
  var draggable = new Draggable({
    xRange: [-100,100],
  });
  var surface = new Surface({
    size: [16,16],
    properties: {
      backgroundColor: '#008',
    },
  });
  surface.pipe(draggable);
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

Grid.prototype.add = function (instr, pos) {
  pos = pos * (1.0 / this.resolution);
  var event;
  if (this.freeEvents.length) {
    event = this.freeEvents.pop();
    event.instr = instr;
    event.pos = pos;
  }
  else {
    event = new GridEvent(instr, pos);
    this.view.add(event.view);
  }
  this.events.push(event);
  return event;
};

module.exports = Grid;
