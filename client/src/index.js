require('./styles');
require('famous-polyfills');

var Engine = require('famous/core/Engine');
var sampletoy = require('./sampletoy')();

Engine.createContext().add(sampletoy.view);
