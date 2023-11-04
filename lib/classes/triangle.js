const Logo = require("./logo");

class Triangle extends Logo {
  constructor(chars, textColor, shape, shapeColor, textSvgY, textSvgStart, shapeText, textSvgEnd) {
    super(chars, textColor, shape, shapeColor, textSvgY, textSvgStart, shapeText, textSvgEnd);
    this.pointA = "150, 20";
    this.pointB = "52, 180";
    this.pointC = "248, 180";
    // Adjusts the text downwards so that it does not go outside the shape
    this.textSvgY = "160";

    this.shapeText = `<polygon points="${this.pointA} ${this.pointB} ${this.pointC}" fill="${this.shapeColor}"/>`;

    this.textSvgEnd =
      `\n\n\t<text x="150" y="${this.textSvgY}" font-size="60" text-anchor="middle" fill="${this.textColor}" font-family="Lucida Console, monospace">${this.chars}</text>\n\n</svg>`;
  }
}

module.exports = Triangle;