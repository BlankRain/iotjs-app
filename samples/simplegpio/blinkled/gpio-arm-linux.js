// for Raspberry Pi B and 2
var GPIO_MAP = {
  CTRL: {
    // follows RPi2 GPIO control
    ENABLE:  0x00020000,
    DISABLE: 0x00000000,
    OUT:     0x00010000,
    IN:      0x00000000,
    FLOAT:   0x00000000
  },
  PINS: {
    LED1: { PIN: 11 },
    LED2: { PIN: 12 },
    LED3: { PIN: 13 },
    LED4: { PIN: 15 },

    LED5: { PIN: 16 },
    BTN1: { PIN: 18 }
  }
};

module.exports = GPIO_MAP;
