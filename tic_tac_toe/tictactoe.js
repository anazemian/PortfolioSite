$(document).ready(function(){
  //Default names for our pirate players
  var pirate1="Pirate 1";
  var pirate2="Pirate 2";
  //clickCounter determines when we've filled the board
  var clickCounter = 1;
  //Varibale to keep track of who was the last player to click
  var lastPlayBones;
  //Coin flip animation variable
  var dubloon = "<img src= 'dubloon.jpg' style='border-radius:100px;'/>"
  //boardArray holds the buttons with the correct id name for resetting the board each game
  var boardArray=[($("#cell1").html()), ($("#cell2").html()), ($("#cell3").html()), ($("#cell4").html()), ($("#cell5").html()), ($("#cell6").html()), ($("#cell7").html()), ($("#cell8").html()), ($("#cell9").html())];

  //function to take the value of the userinput for pirate1 when enter is pressed, and display that name next to the board.  If they don't enter anything, pirate1 stays at default
  $('#pirate1input').keypress(function (e) {
    var key = e.which;
    if(key == 13 && $("#pirate1input").val() !=  ""){
      pirate1 = $("#pirate1input").val();
      $("#pirate1name").html(pirate1);
      $("#pirate1name").prepend('<image src = "invertedbones.jpg"/>' + " ");
      $("#pirate1input").hide();
    }
  });

  //function to take the value of the userinput for pirate2 when enter is pressed, and display that name next to the board.  If they don't enter anything, pirate2 stays at default
  $('#pirate2input').keypress(function (e) {
    var key = e.which;
    if(key == 13 && $("#pirate2input").val() !=  ""){
      pirate2 = $("#pirate2input").val();
      $("#pirate2name").html(pirate2);
      $("#pirate2name").append(' '+'<image src = "invertedskull.png"/>');
      $("#pirate2input").hide();
    }
  });

//function called when user presses startButton
  $("#startButton").click(function(){
    var random = Math.floor(Math.random()*2)+1;
    if (random === 1) {
      lastPlayBones = true;
      $("#pirate1name").css('color', 'red');
    } else {
      lastPlayBones = false;
      $("#pirate2name").css('color', 'red');
    }

    //show the game board
    $(".grid").show();
    //enable all button listeners
    initializeButtons();
    //show the pirate names next to the board
    $("#pirate1name").html(pirate1);
    $("#pirate1name").prepend('<image src = "invertedbones.jpg"/>' + " ");
    $("#pirate2name").html(pirate2);
    $("#pirate2name").append(' '+'<image src = "invertedskull.png"/>');
    //hide the start button
    $("#startButton").hide();
  });

  //function to activate the listeners on all of the buttons
  function initializeButtons(){

    //playAgainButton resets the board using the resetBoard() function
    $("#playAgainButton").click(function(){
      resetBoard();
      $("#kraken").hide();
      $(".grid").show();
    });

    //resetButton refreshes the whole page to start over completely
    $("#resetButton").click(function(){
      location.reload();
    })

    //calls onePlay() and checkForWinner() when the button in cell1 is clicked
    $("#cellButton1").click(function(){
      $("#cell1").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell2 is clicked
    $("#cellButton2").click(function(){
      $("#cell2").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell3 is clicked
    $("#cellButton3").click(function(){
      $("#cell3").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell4 is clicked
    $("#cellButton4").click(function(){
      $("#cell4").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell5 is clicked
    $("#cellButton5").click(function(){
      $("#cell5").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell6 is clicked
    $("#cellButton6").click(function(){
      $("#cell6").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell7 is clicked
    $("#cellButton7").click(function(){
      $("#cell7").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell8 is clicked
    $("#cellButton8").click(function(){
      $("#cell8").html(onePlay());
      checkForWinner();
    });

    //calls onePlay() and checkForWinner() when the button in cell9 is clicked
    $("#cellButton9").click(function(){
      $("#cell9").html(onePlay());
      checkForWinner();
    });

  };



//Returns picture based on which player's turn it currently is and increases the clickCounter
  function onePlay(){
    var picture;
    //If the clickCounter is odd, that means the most recent player was pirate1.
    if (lastPlayBones){
      picture = '<img src="bones.png" height= 5vw width= 5vw/>';
      lastPlayBones = false;
      $("#pirate2name").css('color', 'red');
      $("#pirate1name").css('color', 'white');
    }
    //If the clickCounter is even, that means the most recent player was pirate2.
    else {
      picture ='<img src="skull.png" height= 5vw width= 5vw/>';
      lastPlayBones = true;
      $("#pirate2name").css('color', 'white');
      $("#pirate1name").css('color', 'red');
    };
    clickCounter++;
    return picture;
  };

//Checks for the winner or stalemate
function checkForWinner(){
  if (checkCells("1", "2", "3")){
    whoWon();
  } else if (checkCells("4", "5", "6")){
    whoWon();
  } else if (checkCells("7", "8", "9")) {
    whoWon();
  } else if (checkCells("1", "4", "7")){
    whoWon();
  } else if (checkCells("2", "5", "8")){
    whoWon();
  } else if (checkCells("3", "6", "9")){
    whoWon();
  } else if (checkCells("1", "5", "9")){
    whoWon();
  } else if (checkCells("3", "5", "7")){
    whoWon();
  } else if(clickCounter === 10){
    //in event of stalemate, allow the user to choose to play again or reset the board
    $("#playAgainButton").show();
    $("#resetButton").show();
    $("#gameResults").html("Ye Scurvy Dogs Both Be Kraken Grub!");
    $(".grid").hide();
    $("#kraken").show();
  };
};

  //function to check if three cells have the same picture in them; returns true or false
  function checkCells(id0, id1, id2) {
    return $("#cell"+id0).html() === $("#cell"+id1).html() &&
      $("#cell"+id1).html() === $("#cell"+id2).html();
  }

  function rotateDubloon(dubloon){
    dubloon.stop().animate(
      {rotation: 360},
      {duration: 1000, step: function(now, fx) {
        $(this).css({"transform": "rotate("+now+"deg)"});
        }
      });
    }

  //function to check who won the game, based on the clickCounter
  function whoWon (){
    if (!lastPlayBones){
      $("#gameResults").html(pirate1 + ", Ye Won The Game! ARRRRRR!");
      lastPlayBones = true;
      //don't allow the users to continue to click after someone has won
      disableBoard();
      $("#pirate1score").append(dubloon);
      rotateDubloon($("#pirate1score").children().last());
       $("#playAgainButton").show();
       $("#resetButton").show();
       $("#pirate1name").css('color', 'white');
       $("#pirate2name").css('color', 'white');

    } else {
      $("#gameResults").html(pirate2 + ", Ye Won The Game! ARRRRRR!");
      lastPlayBones = false;
      disableBoard();
      $("#pirate2score").append(dubloon);
      rotateDubloon($("#pirate2score").children().last());
      $("#playAgainButton").show();
      $("#resetButton").show();
      $("#pirate1name").css('color', 'white');
      $("#pirate2name").css('color', 'white');
    };
  };


  //resets the board with new buttons based on the original button values with the original ids
  function resetBoard(){
    $("#cell1").html(boardArray[0]);
    $("#cell2").html(boardArray[1]);
    $("#cell3").html(boardArray[2]);
    $("#cell4").html(boardArray[3]);
    $("#cell5").html(boardArray[4]);
    $("#cell6").html(boardArray[5]);
    $("#cell7").html(boardArray[6]);
    $("#cell8").html(boardArray[7]);
    $("#cell9").html(boardArray[8]);
    //reset the clickCounter
    clickCounter=1;
    //initialize the new buttons
    initializeButtons();
    //reset the gameResults to empty
    $("#gameResults").html("");

    if (lastPlayBones) {
      $("#pirate1name").css('color', 'red');
    } else {
      $("#pirate2name").css('color', 'red');
    };
  }

  //disables any buttons still on board
  function disableBoard (){
    $(".cellButton").prop('disabled',true);
  };



});
