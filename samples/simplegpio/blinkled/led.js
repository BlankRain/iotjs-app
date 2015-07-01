// LED blink sample for IoT.js and node.js

var events = require("events")
  , eventEmitter = new events.EventEmitter()
  , gpio = require("iotjs-gpio")
  , gpiocfg = require("gpiocfg.js")
  , gpio_pout = ["LED1", "LED2", "LED3", "LED4"]
  , gpio_ocnt = 4
  , intervalId
  , durationId
  ;


function gpio_setpins() {
  var idx;
  var pin_ready_cnt = 0;
  for (idx=0; idx<gpio_ocnt; idx++) {
    var portpin = gpiocfg.openout(gpio_pout[idx]);
    gpio.pinmode(portpin, function(err) {
      pin_ready_cnt += 1;
      if (pin_ready_cnt >= gpio_ocnt) {
        eventEmitter.emit("pins_ready");
      }
    });
  }
}


function gpio_run() {
  var on = 1;
  var idx = 0;

  console.log("start blinking...");
  intervalId = setInterval( function() {
    var portpin = gpiocfg.map(gpio_pout[idx]);
    gpio.write(portpin, on);

    idx = idx + 1;
    if (idx >= gpio_ocnt) {
      idx = 0;
      on = (on + 1) % 2;
    }
  }, 100);
}


function gpio_cleanup(timeout) {
  durationId = setTimeout( function() {
    clearInterval(intervalId);
    clearTimeout(durationId);
    console.log("blinking completed");

    var idx;
    for (idx=0; idx<gpio_ocnt; idx++) {
      var portpin = gpiocfg.map(gpio_pout[idx]);
      gpio.write(portpin, 0);

      portpin = gpiocfg.closefloat(gpio_pout[idx]);
      gpio.pinmode(portpin);
    }
    eventEmitter.emit("pins_done");
  }, timeout );
}


eventEmitter.on("pins_ready", function() {
  gpio_run();
  gpio_cleanup(10000);
});


eventEmitter.on("pins_done", function() {
  gpio.release();
})


gpio.initialize(function(err) {
  gpio_setpins();
});
