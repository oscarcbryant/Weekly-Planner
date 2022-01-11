var todaysDate = moment().format("dddd MMMM Do");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();
var timeBlock = $(".time-block");
var hourSection = $(".hour-section");
var taskInput = $(".hour-section");
var saveButton = $(".saveBtn")


//timeBlock.css('background-color', 'green');
//currentHour = 13;
hourSection.each(function() {
var hour = $(this).attr('data-hour');

if (hour < currentHour) {
  
    $(this).css('background-color', 'grey');
}

else if (hour > currentHour) {

    $(this).css('background-color', 'green');
}

else {
    $(this).css('background-color', 'red');
}
})



saveButton.on('click', function(event) {

    event.preventDefault();

var textarea = $(this).prev();
var task = textarea.val();

localStorage.setItem("hour" + textarea.attr('data-hour'), task);
localStorage.getItem("hour");
})








//localStorage.text("textarea");

