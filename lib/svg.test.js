const SVG = require("./svg");
const { Square } = require("./shapes");

//use an argument to pass in the code to test and compare it with the expected output
it("should render a 300 x 200 svg element", () => {
  const expectSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectSvg); //this is the test
});
//use an argument to pass in the function for rendering the text and text color to test and compare it with the expected output
it("should add text and color selected", () => {
  const expectSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "blue"); //testing arguments match template literal above
  expect(svg.render()).toEqual(expectSvg); //this is the test
});
//use an argument to pass in the function for rendering the text and text color to test and compare it with the expected output
it("should set text message and color", () => {
  const expectSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFC0CB">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#FFC0CB");
  expect(svg.render()).toEqual(expectSvg); //this is the test
});

// Checking for code that should throw an error such as more than 3 characters
it("if text is more than 3 characters", () => {
  const expectError = new Error("Text must not exceed 3 characters.");
  const svg = new SVG();
  expect(() => svg.setText("NOT4", "#FFC0CB")).toThrow(expectError);
});

it("should include a shape", () => {
  const expectSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFC0CB">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#FFC0CB");
  const square = new Square();
  square.setColor("black");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectSvg); //this is the test
});
