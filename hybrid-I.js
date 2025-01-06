const Flyable = {
    fly() {
      console.log("I can fly.");
    }
  };
  

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + " makes a sound.");
    }
  }
  

  class Bird extends Animal {
    constructor(name) {
      super(name);
    }
  }
  
  Object.assign(Bird.prototype, Flyable);  
  
 
  const bird = new Bird("Eagle");
  bird.speak();  
  bird.fly();    
  