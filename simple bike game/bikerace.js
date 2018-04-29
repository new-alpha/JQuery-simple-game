
//To start the race

$('#gogo').click(function(){

  // function to check whether a car has reached the finish line or not
  
  function CheckIfComplete(){
    if(isComplete == false){
      isComplete = true;
    }
    else{
      place = 'second';
    }
  }
// The bikes will stop at the finish line with their tips touching it
  
var bikewidth = $('#bike1').width();
var racetrackwidth=$(window).width() - bikewidth;

  //to generate random timings for bike 
  
var bike1time = Math.floor((Math.random()*5000)+1);
var bike2time = Math.floor((Math.random()*5000)+1);

  // flag
var isComplete = false;
 // flag
var place = 'first';

  // animation of first bike
  
$('#bike1').animate({
  left:racetrackwidth
} , bike1time, function(){
    CheckIfComplete();

//To display the timing of first bike
  
    $('#bike1info span').text('Finished in ' + " "+ place + " " + 'in time' +" "+ bike1time +" "+'milliseconds');
});
  //animation of second bike
  
$('#bike2').animate({
  left:racetrackwidth
} , bike2time, function(){
    CheckIfComplete();
//To display the timing of second bike
  
    $('#bike2info span').text('Finished in ' + " "+ place + " " + 'in time' +" "+ bike2time +" "+'milliseconds');
});

});

// To reset the race

$('#rereset').click(function(){

$('.bike').css('left','0');
$('#bike1info span').text(' ');
$('#bike2info span').text(' ');

});
