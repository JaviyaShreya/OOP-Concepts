const CanSing = {
    sing() {
      console.log("Singing a song...");
    }
  };
  
  const CanDance = {
    dance() {
      console.log("Dancing gracefully...");
    }
  };
  
  class Performer {}
  
  Object.assign(Performer.prototype, CanSing, CanDance);
  
  const performer = new Performer();
  performer.sing(); 
  performer.dance(); 
  