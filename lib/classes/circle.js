const Logo = require("./logo");

class Circle extends Logo {
  constructor(chars, textColor, shape, shapeColor, textSvg) {
    super(chars, textColor, shape, shapeColor, textSvg);
    this.cx = "150";
    this.cy = "100";
    this.r = "80";
  }
}

module.exports = Circle;