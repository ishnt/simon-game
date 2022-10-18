var colors = ["red", "green", "yellow", "blue"];
var pattern = [];
var urpattern = [];
var sound1 = new Audio('sounds/blue.mp3');
var sound2 = new Audio('sounds/green.mp3');
var sound3 = new Audio('sounds/yellow.mp3');
var sound4 = new Audio('sounds/red.mp3');
var wrong = new Audio('sounds/wrong.mp3');

var j=0;
var level=0;
$(document).ready(function() {

$(document).keypress(function() {



    pattern_maker();

});

function array_blank(){
  urpattern.length=0;
  }


function pattern_maker(){

  level=level+1;
    $("h1").text("level "+level);
  var random_number=Math.floor((Math.random() * 4) + 1);
   j=0;
  if(random_number==1){
    pattern.push("red");
    $("#red").fadeOut().fadeIn();
    array_blank();



  }
  else if(random_number==2){
    pattern.push("green");
      $("#green").fadeOut().fadeIn();
      array_blank();

  }
  else if(random_number==3){
    pattern.push("yellow");
      $("#yellow").fadeOut().fadeIn();
        array_blank();

  }
  else if(random_number==4){
    pattern.push("blue");
      $("#blue").fadeOut().fadeIn();
        array_blank();

  }
  else{

  }
}


  $("#red").click(function(){

    $("#red").addClass("pressed");
      sound4.play();
    urpattern.push("red");
    setTimeout(function() {
            $("#red").removeClass("pressed");
          }, 100);

          check();


  });

  $("#blue").click(function(){

    $("#blue").addClass("pressed");
    sound1.play();
    urpattern.push("blue");
    setTimeout(function() {
            $("#blue").removeClass("pressed");
          }, 100);

          check();


  });

  $("#yellow").click(function(){


    $("#yellow").addClass("pressed");
      sound3.play();
    urpattern.push("yellow");
    setTimeout(function() {
            $("#yellow").removeClass("pressed");
          }, 100);

          check();


  });

  $("#green").click(function(){


    $("#green").addClass("pressed");
      sound2.play();
    urpattern.push("green");
    setTimeout(function() {
            $("#green").removeClass("pressed");
          }, 100);

          check();




  });

function check(){


  if(pattern[j]===urpattern[j]){

      if(pattern.length==urpattern.length){


    pattern_maker();


  }
  else{
    j++;
  }



  }
  else{
    $("h1").text("Game Over press any key to restart");
    level=0;
  $("body").addClass("game-over");
  setTimeout(function() {
    $(document).keypress(function() {

      window.location.reload();

    
  
  });
          $("body").removeClass("game-over");
        }, 200);
    wrong.play();
   
  }

}

});
