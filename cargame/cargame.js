// function carSpeedsUp(newMake, newModel, newYear){
//   var startSpeed = 0;
//   // Add (model) year, and a method that returns make, model and year as one String and use the method to tell the user.
//   return{
//     make: newMake,
//     model: newModel,
//     year: newYear,
  // Constrain the maximum speed to not exceed 85. Try taking it above 80 and see what happens.
    // getSpeed: function(){
    //   return startSpeed;
    // },
var startSpeed=0
    function accelerate(){
      while(startSpeed<85){
        startSpeed = startSpeed + 10
      }
      if (startSpeed > 85){
        startSpeed = 85
      }
    };
    function brake(){
      while(startSpeed > 0){
        startSpeed = startSpeed - Math.floor(Math.random()*50)
      }
      if (startSpeed < 0){
        startSpeed = 0
      }
    };
//   }
//
//
// };

// myCar = carSpeedsUp("Chevy", "Tahoe", 2016);
