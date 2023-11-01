const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What characters (max 3) do you want in your logo?",
    name: "characters"
  },
  {
    type: "input",
    message: "What color do you want the text in your logo to be?",
    name: "color"
  },
  {
    type: "list",
    message: "What shape do you want your logo to be?",
    choices: ["circle", "triangle", "square"],
    name: "shape"
  }
]