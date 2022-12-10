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

// Variables for time/parent/current hour set
var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id"));
var currentHour = parseInt(moment().format("H"));

//Current hour for color coding
var index =  0;

// Function to determine past/present/future time
timeBlock.each(function () {
    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("H"));
  //   console.log(timeId);
  
    if (timeId < currentHour) {
      $(this).addClass("past");
    } else if (timeId === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
  
      $(this).val(localStorage.getItem(parent.attr("id")));
    }
    $(this).val(localStorage.getItem(parent.attr("id")));
  });