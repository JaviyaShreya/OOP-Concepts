class Shape {
    describe() {
      console.log("I am a shape.");
    }
  }
  
  class Circle extends Shape {
    draw() {
      console.log("Drawing a circle.");
    }
  }
  
  class Rectangle extends Shape {
    draw() {
      console.log("Drawing a rectangle.");
    }
  }
  
  const myCircle = new Circle();
  myCircle.describe(); 
  myCircle.draw();     
  
  const myRectangle = new Rectangle();
  myRectangle.describe(); 
  myRectangle.draw();     
  