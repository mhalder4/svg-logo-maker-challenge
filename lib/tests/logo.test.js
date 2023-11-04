const Logo = require("../classes/logo");

describe("Logo Class Test", () => {
  describe("Instantiation", () => {
    it("should instantiate a class", () => {
      const logo = new Logo("SVG", "white", "Circle", "green");

      expect(logo).toBeInstanceOf(Logo);
    })
  })

  describe("Setting property", () => {
    it("should properly set the properties of the class", () => {
      const logo = new Logo("SVG", "white", "Circle", "green");

      const logoChars = "SVG";
      const logoTextColor = "white";
      const logoShape = "Circle";
      const logoShapeColor = "green";

      expect(logo.chars).toBe(logoChars);
      expect(logo.textColor).toBe(logoTextColor);
      expect(logo.shape).toBe(logoShape);
      expect(logo.shapeColor).toBe(logoShapeColor);
    })
  })

  describe("Running generateSVGText method", () => {
    it("should return the proper string after running the method", () => {
      const logo = new Logo("SVG", "white", "Circle", "green");
      const logoText = logo.generateSVGText();

      const svgString =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n\tPlaceholder\n\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="white" font-family="Lucida Console, monospace">SVG</text>\n\n</svg>`;

      expect(logoText).toBe(svgString);
    })
  })
})


