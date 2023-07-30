const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  it("render svg for a green circle", () => {
    const expectSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectSvg);
  });
  it("should accept a fillColor parameter", () => {
    const expectSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectSvg);
  });
});

describe("Triangle", () => {
  it("should render svg for a white triangle", () => {
    const expectSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="white" />';
    const triangle = new Triangle();
    triangle.setColor("white");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectSvg);
  });
  it("should accept a fillColor parameter", () => {
    const expectSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    const triangle = new Triangle();
    triangle.setColor("blue");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectSvg);
  });
});

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectSvg);
  });
  it("should accept a fillColor param", () => {
    const expectSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectSvg);
  });
});
