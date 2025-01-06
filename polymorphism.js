class Shape {
    calculateArea() {
      console.log("Calculating area...");
    }
  }
  
  class Circle extends Shape {
    calculateArea() {
      console.log("Area of Circle: π * r * r");
    }
  }
  
  class Rectangle extends Shape {
    calculateArea() {
      console.log("Area of Rectangle: length * width");
    }
  }
  
  const circle = new Circle();
  const rectangle = new Rectangle();
  
  circle.calculateArea(); 
  rectangle.calculateArea(); 
  