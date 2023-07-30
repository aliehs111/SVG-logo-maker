  //creates the SVG class and sets the text and shape elements to empty strings:
class SVG {
    constructor() {
      this.textEl = "";
      this.shapeEl = "";
    }
//sets the text element to the text that is passed in:
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
 //sets the text element to the text that is passed in and sets the color to the color that is passed in: 
    setText(message, color) {
      if (message.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
  ///sets the shape element to the shape that is passed in:
    setShape(shape) {
      this.shapeEl = shape.render();
    }
  }
  
  module.exports = SVG;
  