$('#gogo').click(function(){

  function CheckIfComplete(){
    if(isComplete == false){
      isComplete = true;
    }
    else{
      place = 'second';
    }
  }

var bikewidth = $('#bike1').width();
var racetrackwidth=$(window).width() - bikewidth;

var bike1time = Math.floor((Math.random()*5000)+1);
var bike2time = Math.floor((Math.random()*5000)+1);

var isComplete = false;

var place = 'first';

$('#bike1').animate({
  left:racetrackwidth
} , bike1time, function(){
    CheckIfComplete();

    $('#bike1info span').text('Finished in ' + " "+ place + " " + 'in time' +" "+ bike1time +" "+'milliseconds');
});
$('#bike2').animate({
  left:racetrackwidth
} , bike2time, function(){
    CheckIfComplete();

    $('#bike2info span').text('Finished in ' + " "+ place + " " + 'in time' +" "+ bike2time +" "+'milliseconds');
});

});

$('#rereset').click(function(){

$('.bike').css('left','0');
$('#bike1info span').text(' ');
$('#bike2info span').text(' ');

});
