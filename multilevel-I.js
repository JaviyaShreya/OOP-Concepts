class Animal {
    breathe() {
      console.log("I can breathe.");
    }
  }
  
  class Mammal extends Animal {
    feedMilk() {
      console.log("I can give birth to my child.");
    }
  }
  
  class Human extends Mammal {
    speak() {
      console.log("I can speak.");
    }
  }
  
  const person = new Human();
  person.breathe();  
  person.feedMilk(); 
  person.speak();   
  