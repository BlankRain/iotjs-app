// for linux on x86
var GPIO_MAP = {
  CTRL: {
    // not used, maybe set to usb gpio later
    ENABLE:  0x1000,
    DISABLE: 0x2000,
    IN:      0x0000,
    OUT:     0x0100,
    FLOAT:   0x0200,
  },
  PINS: {
    LED1: { PIN: 1 },
    LED2: { PIN: 2 },
    LED3: { PIN: 3 },
    LED4: { PIN: 4 },

    LED5: { PIN: 11 },
    BTN1: { PIN: 12 },
  },
};

module.exports = GPIO_MAP;
