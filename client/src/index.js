require('./styles');
require('famous-polyfills');

var Engine = require('famous/core/Engine');
var page = require('./page');

Engine.createContext().add(page());
