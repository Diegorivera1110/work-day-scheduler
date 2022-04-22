// var textareaEl
var currentDayEl = document.querySelector("#currentDay");
var textareaEl = document.querySelectorAll(".description");
var saveTask = document.querySelectorAll(".saveBtn");
// var eachHour = document.querySelector(".hour");
var eachHour = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4];
var dailyTasks = {};
// var currentHour = moment().hour();



// 1. Show current day and time in #currentDay
var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

// porjects the current day and time (PST)
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("dddd MMMM Do" + ", " + "YYYY" + " " + "hh:mm a"));
// container.append(todaysDate);


// 2. Enable editing and saving info of time slots with text
// 3. load/save changes to local storage
var loadSchedule = function() {
    dailyTasks = JSON.parse(localStorage.getItem("dailyTasks"));
};

var saveSchedule = function() {
    console.log("click")
    console.log(this);
    //   localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
};

for (var i = 0; i < saveTask.length;  i++) {
    saveTask[i].addEventListener("click", saveSchedule);
}

// 4. color-code timeslots for past, present, and future
var auditTime = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < textareaEl.length; i++) {
        console.log(textareaEl[i].id);

        if (textareaEl[i].id < currentHour) {
            textareaEl[i].classList.add("past");

        } else if (textareaEl[i].id > currentHour) {
            textareaEl[i].classList.add("future");
        } else {
            textareaEl[i].classList.add("present");
        } 
    }
};



auditTime();
// 5. test by refreshing page and data is still there and colors are working correctly