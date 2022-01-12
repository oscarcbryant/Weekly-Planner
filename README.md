# Weekly-Planner
Creation of a weekly planner for coding bootcamp homework week-5

The weekly planning exercise enables us to create a web based planner using JQuery. 
We are mostly testing out knowledge in JQuery as part of this program. 

Many elements of JQuery were using, including:

HTML - columns & rows within id and class elements that enable us to seperate the contents inline via html (as opposed to css styling).
JS - using selectors suh as $(""); and on in the event listener to simplify the content required
JS - deploying the 'moment' API to set the current date and time on the web page
JS - adding items to local storage so that we can save the text, when we move away from the page and so that it can be accessed through the application console. 

## challenges

The were able to successfully deployt the moment api. 
However, we faced difficulty with saving the data into local storage. 

A better approach we found was to position the localStorage.getItem into the same section we used to control the colors of the hour fields. 
This meant we were able to use less code and levereage the same function in order to fulfill multiple tasks, that being, a) updating the colors as as the time changes over the course of the day and b) ensuring our input into these same fields was being retieved from local storage...  ie:

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

var task = localStorage.getItem('hour' + hour);

$(this).val(task);

})

### takeaways 

There were a number of lessons learned as part of this exercise, including the importance of being consistence with javascript and jquery language. A few times we confused these which caused issues in our rendering. 
