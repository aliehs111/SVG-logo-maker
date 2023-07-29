const inquirer = require("inquirer");
// import inquirer from "inquirer";
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo which should be 1-3 characters in length",
          validate: (text) =>
            text.length <= 3 ||
            "No more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Please enter a color for your text",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Please choose a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Please enter a color for the shape",
        }
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;

          case "square":
            shape = new Square();
            break;

          default:
            shape = new Triangle();
            break;
        }
        shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Logo generator did not work.");
      });
  }
}

module.exports = CLI;
