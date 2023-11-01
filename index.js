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

function generateSVGText(data) {
  // const square = new Square(data.characters, data.textColor, data.shape, data.shapeColor);
  // console.log(square);

  // const triangle = new Triangle(data.characters, data.textColor, data.shape, data.shapeColor);
  // console.log(triangle);

  // const circle = new Circle(data.characters, data.textColor, data.shape, data.shapeColor);
  // console.log(circle);

  let shape;
  let svgText;
  switch (data.shape) {
    case "Circle":
      shape = new Circle(data.characters, data.textColor, data.shape, data.shapeColor);
      svgText = generateCircleSVGText(shape);
      console.log(svgText);
    case "Triangle":
      shape = new Triangle(data.characters, data.textColor, data.shape, data.shapeColor);
      svgText = generateTriangleSVGText(shape);
      console.log(svgText);
    case "Square":
      shape = new Square(data.characters, data.textColor, data.shape, data.shapeColor);
      svgText = generateSquareSVGText(shape);
      console.log(svgText);
  }
}

function generateCircleSVGText(circle) {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${circle.shapeColor}"/>

  <text x="${circle.textSvg.x}" y="${circle.textSvg.y}" font-size="${circle.textSvg.fontSize}" text-anchor="${circle.textSvg.textAnchor}" fill="${circle.textColor}">${circle.chars}</text>

</svg>
  `;
}

function generateTriangleSVGText(triangle) {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="${triangle.pointA} ${triangle.pointB} ${triangle.pointC}" fill="${triangle.shapeColor}"/>

  <text x="${triangle.textSvg.x}" y="${triangle.textSvg.y}" font-size="${triangle.textSvg.fontSize}" text-anchor="${triangle.textSvg.textAnchor}" fill="${triangle.textColor}">${triangle.chars}</text>

</svg>
  `;
}

function generateSquareSVGText(square) {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="${square.x}" y="${square.y}" width="${square.width}" height="${square.height}" fill="${square.shapeColor}"/>

  <text x="${square.textSvg.x}" y="${square.textSvg.y}" font-size="${square.textSvg.fontSize}" text-anchor="${square.textSvg.textAnchor}" fill="${square.textColor}">${square.chars}</text>

</svg>
  `;
}

function start() {
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      generateSVGText(answers);
    })
}

start();