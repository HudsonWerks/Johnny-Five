var five = require('johnny-five');
var BeagleBone = require('beaglebone-io');
var board = new five.Board({
  io: new BeagleBone()
});

board.on('ready', function() {
  var led = new five.Led();

// turn the LED off and on in 1000ms increments
  led.blink(1000);

  this.repl.inject({ led: led });
});
