// reads GPIO configuration file for iot.js or node.js
// provides simple method for pin open/close/map

var cfgfile = "gpio-" + process.arch + "-" + process.platform;
if (process.iotjs)
  cfgfile += ".js";
else
  cfgfile += "-node.js";

var gpiomap = require(cfgfile);

function GpioCfg() {

}


GpioCfg.map = function(portname) {
  return gpiomap.PINS[portname].GPIO;
}


GpioCfg.openout = function(portname) {
  return gpiomap.PINS[portname].GPIO | gpiomap.CTRL.OPEN | gpiomap.CTRL.OUT;
}


GpioCfg.openin = function(portname) {
  return gpiomap.PINS[portname].GPIO | gpiomap.CTRL.OPEN | gpiomap.CTRL.IN;
}


GpioCfg.closefloat = function(portname) {
  return gpiomap.PINS[portname].GPIO | gpiomap.CTRL.CLOSE | gpiomap.CTRL.FLOAT;
}


module.exports = GpioCfg;
