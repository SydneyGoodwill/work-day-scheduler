
// THIS CODE IS OLD; I ended up writing my JavaScript inside of a script tag in my HTML - don't pay attention to this, just for me to have to come back to.

const timeBlockTemp = `
<div class="row">
    <div class="col-md-2 hour">12:00AM</div>
    <div class="time-block col-md-8"><textarea class="time-block"></textarea>
</div>
<div class="col-md-2"><button class="saveBtn"></button. </div>
</div>`;
let currentDay = document.querySelector("#currentDay");

$(document).ready(function () {
// Establishing the current time and date on the top
function date() {
    setInterval(function() {
        var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        currentDay.textContent = currentDate
        console.log(currentDate);
    }, 1000);
}
date();

// For loop creating 24 timeblock containers for the daily planner
for (let i = 0; i < 24; i++) {
    const foo = $($.parseHTML(timeBlockTemp));
    $('#timeBlockCont').append(foo);
    
    // Creating an onclick listener for each of the time blocks
    $(".time-block").on("click", function() {
        console.log("test")
    });
    const hoursOfDay = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
} })
