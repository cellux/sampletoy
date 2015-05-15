var Surface = require('famous/core/Surface');
var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
var FlexibleLayout = require('famous/views/FlexibleLayout');

var Grid = require('./Grid');
var Instr = require('./Instr');
var Fx = require('./Fx');
var Env = require('./Env');

function SampleToy() {
  var self = this;

  self.grid = new Grid();
  self.instr = new Instr();
  self.fx = new Fx();
  self.env = new Env();

  var layout = new HeaderFooterLayout();

  var header = new Surface({
    size: [undefined, 32],
    content: 'header',
    properties: {
      backgroundColor: '#484',
    },
  });
  layout.header.add(header);

  var grid_instruments = new FlexibleLayout({
    ratios: [0.618,0.382],
  });
  grid_instruments.sequenceFrom([self.grid.view, self.instr.view]);
  var fx_env = new FlexibleLayout({
    ratios: [0.618,0.382],
  });
  fx_env.sequenceFrom([self.fx.view, self.env.view]);
  var main = new FlexibleLayout({
    ratios: [0.75, 0.25],
    direction: 1,
  });
  main.sequenceFrom([grid_instruments, fx_env]);
  layout.content.add(main);

  var footer = new Surface({
    size: [undefined, 32],
    content: 'footer',
    properties: {
      backgroundColor: '#484',
    },
  });
  layout.footer.add(footer);

  self.view = layout;
  return self;
}

module.exports = SampleToy;
