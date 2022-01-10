var todaysDate = moment().format("dddd MMMM Do");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();
var timeBlock = $(".time-block");
var hourSection = $(".hour-section");


//timeBlock.css('background-color', 'green');
currentHour = 12;
hourSection.each(function() {
var hour = $(this).attr('data-hour');

if (hour < currentHour) {
  
    $(this).css('background-color', 'red');
}

else {
    $(this).css('background-color', 'green');
}
})




//localStorage.text("textarea");

