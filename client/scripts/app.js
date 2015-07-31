$(document).ready(function() {
  $('.gen-project').on('click', function() {
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
  });//end project btn

  $('body').on('click', '.assign-staff', function() {
    addEmployee();
  });//end Assign Staff btn

});//End Document Ready

var wholeTeam = [];

function checkTeam (){
  var fe = false;
  var ss = false;
  var cs = false;
  for (var i = 0; i < wholeTeam.length; i++) {
    if(wholeTeam[i].employeeSkill == "Front End"){fe = true;}
    if(wholeTeam[i].employeeSkill == "Serverside Logic"){ss = true;}
    if(wholeTeam[i].employeeSkill == "Clientside Logic"){cs = true;}
  };
  if(!fe || !ss || !cs){
    addEmployee();
  }
}

function addEmployee (){
  $.ajax({
    url: "/employee-request",
    success: function(randomEmployee) {
      empObj = randomEmployee;
      console.log(empObj);
      wholeTeam.push(empObj);
      $('.employees').append('<div class="employee">'+empObj.employeeName+': '+empObj.employeeSkill+'</div>')
    },
    complete: function(){
      console.log(wholeTeam);
      checkTeam();
    }
  });

}

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



