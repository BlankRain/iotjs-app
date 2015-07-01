// for Raspberry Pi B and 2

var GPIO_MAP = {
  CTRL: {
    OPEN:  0x1000,
    CLOSE: 0x2000,
    IN:    0x0000,
    OUT:   0x0100,
    FLOAT: 0x0200,
  },
  PINS: {
    LED1: { GPIO: 11 },
    LED2: { GPIO: 12 },
    LED3: { GPIO: 13 },
    LED4: { GPIO: 15 },

    LED5: { GPIO: 16 },
    BTN1: { GPIO: 18 },
  },
};

module.exports = GPIO_MAP;
