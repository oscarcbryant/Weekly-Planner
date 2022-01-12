//using moment to set the current day in the header of page
var todaysDate = moment().format("dddd MMMM Do");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();
var timeBlock = $(".time-block");
var hourSection = $(".hour-section");
var taskInput = $(".hour-section");
var saveButton = $(".saveBtn")


//timeBlock.css('background-color', 'green');
//currentHour = 13;

// using hourSection and this to spread the color rendering across each hour block
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
// we have entered the get localstorage item within the hour blocks to ensure they remain on the page when we click away
var task = localStorage.getItem('hour' + hour);

$(this).val(task);

})


// created saveBtn function so when we click, the input is saved into local storage.
saveButton.on('click', function(event) {

    event.preventDefault();

var textarea = $(this).prev();
var task = textarea.val();

localStorage.setItem("hour" + textarea.attr('data-hour'), task);
localStorage.getItem("hour");
})








//localStorage.text("textarea");

