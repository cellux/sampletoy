require('./styles');
require('famous-polyfills');

var Engine = require('famous/core/Engine');
var SampleToy = require('./SampleToy');

var Sampler = require('./Sampler');

var sampletoy = new SampleToy();
var kick = sampletoy.instr.add("kick", new Sampler("http://www.freesound.org/people/DWSD/sounds/171104/download/171104__dwsd__kick-gettinglaid.wav"));
sampletoy.grid.resolution = 4;
for (var i=0; i<4; i++) {
  sampletoy.grid.add(kick, i);
}
Engine.createContext().add(sampletoy.view);
//sampletoy.transport.start();
