$(document).ready(function(){
    var startSpeed=0;
  $("#carMakeButton").click(function(){
    var make = $("#newMake").val();
    $("#carMake").text(make);
    var model = $("#newModel").val();
    $("#carModel").text(model);
    var year = $("#newYear").val();
    $("#carYear").text(year);
    $(".hideInputs").hide();
  });
  $("#speedUpButton").click(function(){
    if(startSpeed<85){
      startSpeed = startSpeed + 10
    }
    if (startSpeed > 85){
      startSpeed = 85
    }
    $("#speed").text(startSpeed)
  });
  $("#slowDownButton").click(function(){
    if(startSpeed > 0){
      startSpeed = startSpeed - Math.floor(Math.random()*50)
    }
    if (startSpeed < 0){
      startSpeed = 0
    }
    $("#speed").text(startSpeed)
  });
});
