var Surface = require('famous/core/Surface');
var ScrollContainer = require('famous/views/ScrollContainer');

function InstrumentSlot(name, instr) {
  var self = this;
  self.name = name;
  self.instr = instr;
  self.view = new Surface({
    content: self.name,
    size: [undefined, 100],
    properties: {
      backgroundColor: '#99c',
    },
  });
}

function Instr() {
  var self = this;
  self.slots = [];
  self.slotViews = [];
  self.view = new ScrollContainer({
    scrollview: {
      direction: 0,
    },
  });
  self.view.sequenceFrom(self.slotViews);
  return self;
}

Instr.prototype.add = function (name, instr) {
  var slot = new InstrumentSlot(name, instr);
  this.slots.push(slot);
  this.slotViews.push(slot.view);
  return instr;
};

module.exports = Instr;
