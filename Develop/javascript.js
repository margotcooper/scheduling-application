document.getElementById("currentDay").textContent =
  moment().format("dddd, MMM Do");

// another way of doing the above: currentDay.textContent = moment().format("dddd, MMM Do");

var saveBtn = $(".saveBtn");
$(saveBtn).on("click", save);
function save() {
  console.log($(this).attr("id"));
}

//'this' refers to self of what you are accessing. this=self of whatever element clicked. same in vanilla JS and jQuery.
//when page refreshes, all values should still exist.
//iterate over list, for loop, check if id for that block is < current hour in the past, > current hour in the future, and 'else' is present. (activities 1 and 2)
//can set interval timer to rerun function that runs loop to see what part of the hour it is.
//change above to save whatever is entered in textbox using jQuery
//in activities for this week, solved version of activity 2, can see how jQuery handles elements
//want to get value from the child that is the textbox, can use jQuery

//to add button to pop up form and to add button to submit form to schedule
// alertButtonEl.on("click", function () {
//   alert("Hello World");
// });
//see activity 4 on html to add buttons

//see activities 5 & 6 on how to add a form element
//put button inside of 'form' in html or formEl.on('submit', handleFormSubmit); does not work
//append the input to the document.
//prevent default - stops clearing of the form.
//adding classes to ul children - lis, activity 7, can add multiple classes with space in between. activity 8 shows how to change style as well.

//event delegation activities 9 & 10
//activity 9
//buttons that are dynamically created... need clearEl.on('click, function () {   };)
//event.target.attr()
//create div, add attribute, then append
//var alphabet = "abdcedf...".toUpperCase
//loop through letters, add create button, set value for it, and set text/append
//clear - displayEl.empty();

//activity 10
//1.43 in class video
//can add class in between click and function.
//const buttonThatWasClicked = $(event.target);
//buttonThatWasClicked.parent('li').remove();

//has to allow user to type into textbox, save into local storage, when page loads, put that info into textboxes, and change colors of hours based on when page loads
//add event listener on save button.
//activity 3 adds event listeners.
