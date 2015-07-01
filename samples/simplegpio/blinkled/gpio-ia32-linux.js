// for linux on x86

var GPIO_MAP = {
  CTRL: {
    OPEN:  0x1000,
    CLOSE: 0x2000,
    IN:    0x0000,
    OUT:   0x0100,
    FLOAT: 0x0200,
  },
  PINS: {
    LED1: { GPIO: 1 },
    LED2: { GPIO: 2 },
    LED3: { GPIO: 3 },
    LED4: { GPIO: 4 },

    LED5: { GPIO: 11 },
    BTN1: { GPIO: 12 },
  },
};

module.exports = GPIO_MAP;
