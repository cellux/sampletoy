var assert = require('assert');

var Surface = require('famous/core/Surface');
var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
var FlexibleLayout = require('famous/views/FlexibleLayout');

var grid = require('./grid');
var instr = require('./instr');
var fx = require('./fx');
var env = require('./env');

function sampletoy() {
  var self = {
    grid: grid(),
    instr: instr(),
    fx: fx(),
    env: env(),
  };

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

module.exports = sampletoy;
