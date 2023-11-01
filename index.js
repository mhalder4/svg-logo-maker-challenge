const inquirer = require("inquirer");
const fs = require("fs");

const Square = require("./lib/classes/square");

const questions = [
  {
    type: "input",
    message: "What characters (max 3) do you want in your logo?",
    name: "characters"
  },
  {
    type: "input",
    message: "What color do you want the text in your logo to be?",
    name: "textColor"
  },
  {
    type: "list",
    message: "What shape do you want your logo to be?",
    choices: ["circle", "triangle", "square"],
    name: "shape"
  },
  {
    type: "input",
    message: "What color do you want the shape in your logo to be?",
    name: "shapeColor"
  }
];

function generateSVG(data) {
  const square = new Square(data.characters, data.textColor, data.shape, data.shapeColor);
  console.log(square);
}

function start() {
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      generateSVG(answers);
    })
}

start();