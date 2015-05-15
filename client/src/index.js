require('./styles');
require('famous-polyfills');

var Engine = require('famous/core/Engine');
var SampleToy = require('./SampleToy');

var sampletoy = new SampleToy();
Engine.createContext().add(sampletoy.view);
