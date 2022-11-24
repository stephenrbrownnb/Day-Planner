$(function () {
  //Shows todays Date
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
//Determines current hour
var hourLive = today.$H;
//loop to go through timeslots and compare to current time, as well as get the local storage 
$(".time-block").each(function(){

  let currentTimeSlot=$(this).attr("id");
 $(this).children(".description").val(localStorage.getItem(currentTimeSlot));

 if (currentTimeSlot < hourLive) {
  $(this).addClass("past");
  }
   if (currentTimeSlot == hourLive) {
    $(this).addClass("present");
    }
    if (currentTimeSlot > hourLive) {
      $(this).addClass("future");    
}})
//Action for saving a timeslot
$(".saveBtn").click(function(){
//Sets a variable for which button was hit
  let currentButton = $(this);
 //Retrieves the text from the textbox and the name of the timeslot.
  var userInput = $(currentButton).siblings(".description").val();
  var timeOfDay = $(currentButton).parent().attr("id");
//stores the text to local storage under the time of day.
   localStorage.setItem(timeOfDay, userInput);
})
});

