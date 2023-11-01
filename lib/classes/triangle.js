const Logo = require("./logo");

class Triangle extends Logo {
  constructor(chars, textColor, shape, shapeColor, textSvg) {
    super(chars, textColor, shape, shapeColor, textSvg);
    // "150, 20 52, 180 248, 180 "
    this.pointA = "150, 20";
    this.pointB = "52, 180";
    this.pointC = "248, 180";
    this.textSvg.y = "160";
  }
}

module.exports = Triangle;