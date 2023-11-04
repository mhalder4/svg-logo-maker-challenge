const Logo = require("./logo");

class Circle extends Logo {
  constructor(chars, textColor, shape, shapeColor, textSvgY, textSvgStart, shapeText, textSvgEnd) {
    super(chars, textColor, shape, shapeColor, textSvgY, textSvgStart, shapeText, textSvgEnd);
    this.cx = "150";
    this.cy = "100";
    this.r = "80";

    this.shapeText = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}"/>`;
  }
}

module.exports = Circle;