class Logo {
  constructor(chars, textColor, shape, shapeColor) {
    this.chars = chars;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.textSvgY = "125";

    this.textSvgStart =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n\t';

    this.shapeText = "Placeholder";

    this.textSvgEnd =
      `\n\n\t<text x="150" y="${this.textSvgY}" font-size="60" text-anchor="middle" fill="${this.textColor}" font-family="Lucida Console, monospace">${this.chars}</text>\n\n</svg>`;
  }

  generateSVGText() {
    return this.textSvgStart + this.shapeText + this.textSvgEnd;
  }
}

module.exports = Logo;