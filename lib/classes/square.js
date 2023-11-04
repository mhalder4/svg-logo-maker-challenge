const Logo = require("./logo");

class Square extends Logo {
  constructor(chars, textColor, shape, shapeColor, textSvgY, textSvgStart, shapeText, textSvgEnd) {
    super(chars, textColor, shape, shapeColor, textSvgY, textSvgStart, shapeText, textSvgEnd);
    this.x = "70";
    this.y = "20";
    this.width = "160";
    this.height = "160";

    this.shapeText = `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.shapeColor}"/>`;
  }
}

module.exports = Square;