class Logo {
  constructor(chars, textColor, shape, shapeColor) {
    this.chars = chars;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.textSvg = {
      x: "150",
      y: "125",
      fontSize: "60",
      textAnchor: "middle"
    }
  }
}

module.exports = Logo;