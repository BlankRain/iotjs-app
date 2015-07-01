// for NuttX on STM32F4-discovery BB
var GPIO_MODE_SHIFT   = 18;
var GPIO_MODE_MASK    = (3 << GPIO_MODE_SHIFT);
var GPIO_INPUT        = (0 << GPIO_MODE_SHIFT);
var GPIO_OUTPUT       = (1 << GPIO_MODE_SHIFT);

var GPIO_PUPD_SHIFT   = (16);
var GPIO_PUPD_MASK    = (3 << GPIO_PUPD_SHIFT);
var GPIO_FLOAT        = (0 << GPIO_PUPD_SHIFT);
var GPIO_PULLUP       = (1 << GPIO_PUPD_SHIFT);
var GPIO_PULLDOWN     = (2 << GPIO_PUPD_SHIFT);

var GPIO_PORT_SHIFT   = (4);
var GPIO_PORT_MASK    = (7 << GPIO_PORT_SHIFT);
var GPIO_PORTA        = (0 << GPIO_PORT_SHIFT);
var GPIO_PORTB        = (1 << GPIO_PORT_SHIFT);
var GPIO_PORTC        = (2 << GPIO_PORT_SHIFT);
var GPIO_PORTD        = (3 << GPIO_PORT_SHIFT);

var GPIO_PIN_SHIFT    = (0);
var GPIO_PIN_MASK     = (15 << GPIO_PIN_SHIFT);
var GPIO_PIN0         = (0 << GPIO_PIN_SHIFT);
var GPIO_PIN1         = (1 << GPIO_PIN_SHIFT);
var GPIO_PIN2         = (2 << GPIO_PIN_SHIFT);
var GPIO_PIN3         = (3 << GPIO_PIN_SHIFT);
var GPIO_PIN4         = (4 << GPIO_PIN_SHIFT);
var GPIO_PIN5         = (5 << GPIO_PIN_SHIFT);
var GPIO_PIN6         = (6 << GPIO_PIN_SHIFT);
var GPIO_PIN7         = (7 << GPIO_PIN_SHIFT);
var GPIO_PIN8         = (8 << GPIO_PIN_SHIFT);
var GPIO_PIN9         = (9 << GPIO_PIN_SHIFT);
var GPIO_PIN10        = (10 << GPIO_PIN_SHIFT);
var GPIO_PIN11        = (11 << GPIO_PIN_SHIFT);
var GPIO_PIN12        = (12 << GPIO_PIN_SHIFT);
var GPIO_PIN13        = (13 << GPIO_PIN_SHIFT);
var GPIO_PIN14        = (14 << GPIO_PIN_SHIFT);
var GPIO_PIN15        = (15 << GPIO_PIN_SHIFT);

var GPIO_MAP = {
  CTRL: {
    OPEN:  0,
    CLOSE: 0,
    OUT:   GPIO_OUTPUT | GPIO_PULLUP,
    IN:    GPIO_INPUT  | GPIO_PULLDOWN,
    FLOAT: GPIO_OUTPUT | GPIO_FLOAT,
  },
  PINS: {
    LED1: { GPIO: GPIO_PIN8  | GPIO_PORTA },
    LED2: { GPIO: GPIO_PIN10 | GPIO_PORTA },
    LED3: { GPIO: GPIO_PIN15 | GPIO_PORTA },
    LED4: { GPIO: GPIO_PIN11 | GPIO_PORTD },

    LED5: { GPIO: GPIO_PIN3  | GPIO_PORTA },
    BTN1: { GPIO: GPIO_PIN0  | GPIO_PORTA },
  },
};

module.exports = GPIO_MAP;
