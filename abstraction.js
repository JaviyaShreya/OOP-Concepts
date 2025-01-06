class Vehicle {
    move() {
      throw new Error("This method must be overridden!");
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log("Car is driving.");
    }
  }
  
  class Bike extends Vehicle {
    move() {
      console.log("Bike is riding.");
    }
  }
  
  const car = new Car();
  const bike = new Bike();
  
  car.move(); 
  bike.move(); 
  