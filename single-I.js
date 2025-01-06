class Vehicle {
    type() {
      console.log("I am a vehicle.");
    }
  }
  
  class Car extends Vehicle {
    wheels() {
      console.log("I have 4 wheels.");
    }
  }
  
  const myCar = new Car();
  myCar.type();   
  myCar.wheels(); 
  