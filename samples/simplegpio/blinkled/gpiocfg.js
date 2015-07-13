// reads GPIO configuration file for iot.js or node.js
// provides simple method for pin open/close/map

var cfgfile = "./gpio-" + process.arch + "-" + process.platform + ".js";
var gpiomap = require(cfgfile);

function GpioCfg() {

}


GpioCfg.map = function(portname) {
  return gpiomap.PINS[portname].PIN;
}


GpioCfg.enableout = function(portname) {
  return gpiomap.PINS[portname].PIN |
         gpiomap.CTRL.ENABLE |
         gpiomap.CTRL.OUT;
}


GpioCfg.enablein = function(portname) {
  return gpiomap.PINS[portname].PIN |
         gpiomap.CTRL.ENABLE |
         gpiomap.CTRL.IN;
}


GpioCfg.disablefloat = function(portname) {
  return gpiomap.PINS[portname].PIN |
         gpiomap.CTRL.DISABLE |
         gpiomap.CTRL.FLOAT;
}


module.exports = GpioCfg;
