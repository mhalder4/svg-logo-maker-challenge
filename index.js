const inquirer = require("inquirer");
const fs = require("fs");

const Circle = require("./lib/classes/circle");
const Triangle = require("./lib/classes/triangle");
const Square = require("./lib/classes/square");

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

function displayInstructions() {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "This program is intended to create a logo in the shape of either a circle, a triangle, or a square with up to three characters in the middle of the shape. The colors of both the text and the shape can be chosen. If your logo does not appear as anticipated, double check to make sure that there are no typos or incorrect submissions."
  );
}

function checkValidity(data) {
  const charCheck = (data.characters.length > 0) && (data.characters.length < 4);
  // console.log(charCheck);
  const textColorCheck = !!data.textColor;
  // console.log(textColorCheck);
  const shapeColorCheck = !!data.shapeColor;
  // console.log(shapeColorCheck);

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

function generateCircleSVGText(circle) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${circle.shapeColor}"/>
  
  <text x="${circle.textSvg.x}" y="${circle.textSvg.y}" font-size="${circle.textSvg.fontSize}" text-anchor="${circle.textSvg.textAnchor}" fill="${circle.textColor}" font-family="${circle.textSvg.fontFamily}">${circle.chars}</text>
  
  </svg>
  `;
}

function generateTriangleSVGText(triangle) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <polygon points="${triangle.pointA} ${triangle.pointB} ${triangle.pointC}" fill="${triangle.shapeColor}"/>
  
  <text x="${triangle.textSvg.x}" y="${triangle.textSvg.y}" font-size="${triangle.textSvg.fontSize}" text-anchor="${triangle.textSvg.textAnchor}" fill="${triangle.textColor}" font-family="${triangle.textSvg.fontFamily}">${triangle.chars}</text>
  
  </svg>
  `;
}

function generateSquareSVGText(square) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <rect x="${square.x}" y="${square.y}" width="${square.width}" height="${square.height}" fill="${square.shapeColor}"/>
  
  <text x="${square.textSvg.x}" y="${square.textSvg.y}" font-size="${square.textSvg.fontSize}" text-anchor="${square.textSvg.textAnchor}" fill="${square.textColor}" font-family="${square.textSvg.fontFamily}">${square.chars}</text>
  
  </svg>
  `;
}

function generateSVGText(data) {

  let shape;
  let svgText;

  switch (data.shape) {
    case "Circle":
      shape = new Circle(data.characters, data.textColor, data.shape, data.shapeColor);
      svgText = generateCircleSVGText(shape);
      // console.log(svgText);
      return svgText;
    case "Triangle":
      shape = new Triangle(data.characters, data.textColor, data.shape, data.shapeColor);
      svgText = generateTriangleSVGText(shape);
      // console.log(svgText);
      return svgText;
    case "Square":
      shape = new Square(data.characters, data.textColor, data.shape, data.shapeColor);
      svgText = generateSquareSVGText(shape);
      // console.log(svgText);
      return svgText;
  }
}

function writeSVGFile(data, text) {
  const fileName = `${data.characters}_${data.textColor}_${data.shape}_${data.shapeColor}_logo.svg`;
  fs.writeFile(__dirname + `/./user_logos/${fileName}`, text, (err) =>
    err ? console.error(err) : console.log(`Generated ${fileName} successfully.`)
  );
}


function start() {
  displayInstructions();

  inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      if (checkValidity(answers)) {
        const svgText = generateSVGText(answers);
        // console.log("Generated a logo.");
        // console.log(svgText);

        writeSVGFile(answers, svgText);
      }
    })
}

// displayInstructions();
start();