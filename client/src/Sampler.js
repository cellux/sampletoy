var events = require('events');
var util = require('util');
var request = require('superagent');

function Sampler(url) {
  events.EventEmitter.call(this);
  var self = this;
  self.error = false;
  request.get('api/sample')
  .query({ url: url })
  .end(function(err, res) {
    if (err) {
      self.error = true;
      return;
    }
    Tone.context.decodeAudioData(res.body, function (buffer) {
      self.buffer = buffer;
      self.emit('buffer-loaded');
    });
  });
}

util.inherits(Sampler, events.EventEmitter);

module.exports = Sampler;
