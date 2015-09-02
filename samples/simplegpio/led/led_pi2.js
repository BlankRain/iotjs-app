var gpio = require("gpio");

gpio.initialize();

gpio.on('initialize', function() {
  console.log('GPIO initialized');
  gpio.setPin(16, "out");
});

gpio.on('setpin', function(pin, dir, mode) {
  console.log('setpin complete - pin: %d, direction: %s, mode: %s', pin, dir, mode);
  gpio.writePin(pin, true);
  var interval = setInterval(function() {
    gpio.readPin(pin, function(err, value) {
      if (!err) {
        console.log("read pin:%d value:%d", pin, value);
        gpio.writePin(pin, !value);
      } else {
        clearInterval(interval);
      }
    });
  }, 1000);
});

gpio.on('error', function(err) {
  console.log(err);
});

