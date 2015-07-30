$(document).ready(function() {
  $('.gen-project').on('click', function() {
    console.log("button was clicked!");

    var project = {
      name : makeName(),
      frontend : randomNum(),
      clientside : randomNum(),
      serverside : randomNum()
    };
    $('.project').html("");
    $('.project').append('<div class="proj-name">Company Name: '+ project.name +'</div>');
    $('.project').append('<div class="skill">Front End Scrum Need: '+ project.frontend +'</div>');
    $('.project').append('<div class="skill">Clientside Scrum Need: '+ project.clientside +'</div>');
    $('.project').append('<div class="skill">Serverside Scrum Need: '+ project.serverside +'</div>');
    $('.project').append('<button class="btn assign-staff">Assign Staff</button>');


    console.log(project);
  });

  $('body').on('click', '.assign-staff', function() {
    console.log("Assign Staff Button Clicked");
    baseTeam();
  });

  var wholeTeam = [];

  function baseTeam (){
    var frontend = false;
    var clientside = false;
    var serverside = false;
    var empObj = {};



    while(frontend == false || clientside == false || serverside == false){

      $.ajax({
        url: "/employee-request",
        success: function(randomEmployee) {
          empObj = randomEmployee;
          console.log(empObj);
          console.log(empObj.employeeSkill);

          if(empObj.employeeSkill == "Front End"){
            frontend = true;
            wholeTeam.push(empObj);
            console.log(empObj.employeeSkill);
          } else if (empObj.employeeSkill == "Clientside Logic") {
            clientside = true;
            wholeTeam.push(empObj);
            console.log(empObj.employeeSkill);
          } else if (empObj.employeeSkill == "Serverside Logic"){
            serverside = true;
            wholeTeam.push(empObj);
            console.log(empObj.employeeSkill);
          } else {
            console.log("Found no match");
          }

        }});



    }
  };



  console.log(wholeTeam);
  return wholeTeam;

});
  var randomNum = function(){
    return Math.floor(Math.random() * (1 + 60 - 10) + 10);
  };


  function makeName(){
    var adjective = ["Desolate", "Hungry", "Amplified", "Silly", "Urgent", "Cold", "Ample", "Tiny", "Peaceful", "Beloved", "Vast", "Forlorn"];
    var noun = ["Mountain", "Ocean", "Market", "Mark", "District", "Solutions", "Window", "Coffee", "Pancake", "Town", "Tacos", "Mall", "Highway"];

    var num1 = Math.floor(Math.random() * adjective.length);
    var num2 = Math.floor(Math.random() * noun.length);
    return adjective[num1] + " " + noun[num2];
  }



