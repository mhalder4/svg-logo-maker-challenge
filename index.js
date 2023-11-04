const inquirer = require("inquirer");
const fs = require("fs");

const Circle = require("./lib/classes/circle");
const Triangle = require("./lib/classes/triangle");
const Square = require("./lib/classes/square");

// Inquirer questions
const questions = [
  {
    type: "input",
    message: "What characters (max 3, case-sensitive) do you want in your logo?",
    name: "characters"
  },
  {
    type: "input",
    message: "What color (Ex. blue or #0000FF) do you want the text in your logo to be?",
    name: "textColor"
  },
  {
    type: "list",
    message: "What shape do you want your logo to be?",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape"
  },
  {
    type: "input",
    message: "What color (Ex. blue or #0000FF) do you want the shape in your logo to be?",
    name: "shapeColor"
  }
];

// Displays how to use the program in the console
function displayInstructions() {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "This program is intended to create a logo in the shape of either a circle, a triangle, or a square with up to three characters in the middle of the shape. The colors of both the text and the shape can be chosen. If your logo does not appear as anticipated, double check to make sure that there are no typos or incorrect submissions."
  );
}

// Checks if the answers inputted by the user are valid answers
function checkValidity(data) {
  const charCheck = (data.characters.length > 0) && (data.characters.length < 4);
  const textColorCheck = !!data.textColor;
  const shapeColorCheck = !!data.shapeColor;

  if (!charCheck) {
    console.log("\x1b[31m%s\x1b[0m", "Error: There are either too many or too few characters enterred. Please try again.");
    return false;
  } else if (!textColorCheck) {
    console.log("\x1b[31m%s\x1b[0m", "Error: A text color was not input. Please try again.");
    return false;
  } else if (!shapeColorCheck) {
    console.log("\x1b[31m%s\x1b[0m", "Error: A shape color was not input. Please try again.");
    return false;
  } else return true

}

// Determines which SVG text to generate based on the shape input by the user
function createSVGText(data) {

  let logoShape;
  let svgText;

  const { characters, textColor, shape, shapeColor } = data;

  switch (shape) {
    case "Circle":
      logoShape = new Circle(characters, textColor, shape, shapeColor);
      svgText = logoShape.generateSVGText();
      return svgText;
    case "Triangle":
      logoShape = new Triangle(characters, textColor, shape, shapeColor);
      svgText = logoShape.generateSVGText();
      return svgText;
    case "Square":
      logoShape = new Square(characters, textColor, shape, shapeColor);
      svgText = logoShape.generateSVGText();
      return svgText;
  }
}

// Writes the SVG text to a new file
function writeSVGFile(data, text) {
  const fileName = `${data.characters}_${data.textColor}_${data.shape}_${data.shapeColor}_logo.svg`;
  fs.writeFile(__dirname + `/./user_logos/${fileName}`, text, (err) =>
    err ? console.error(err) : console.log(`Generated ${fileName} successfully.`)
  );
}

// Starts the program and runs all the necessary functions
function start() {
  displayInstructions();

  inquirer
    .prompt(questions)
    .then(answers => {
      if (checkValidity(answers)) {
        const svgText = createSVGText(answers);

        writeSVGFile(answers, svgText);
      }
    })
}


start();