// Declaration of elements/classes
var rows = $(".row");
var hours = $(".hour");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var timeBlock = $(".time-block");
var saveButton = $(".saveBtn");
var hourTask = $("id");
var userText = $(".hour-task");

// Set current time in header when application is opened
$(document).ready(function () {
  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM, Do"));

  var hours = today.hours();
    //console.log(hours);
});