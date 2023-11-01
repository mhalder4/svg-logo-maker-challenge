const Logo = require("./logo");

class Square extends Logo {
  constructor(chars, textColor, shape, shapeColor, textSvg) {
    super(chars, textColor, shape, shapeColor, textSvg);
    this.x = "70";
    this.y = "20";
    this.width = "160";
    this.height = "160";
  }
}

module.exports = Square;