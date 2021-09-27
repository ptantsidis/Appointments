let timeDisplayEl = $('#time-display');
let listGroupEl = $('.timeslot');
let allSaveBtns = document.querySelectorAll("button");
let timeSlots = document.querySelectorAll(".timeslot");
let i = 0;
let localStores = [{
  schedTime: "09",
  schedText: "",
},
{
  schedTime: "10",
  schedText: "",
},
{
  schedTime: "11",
  schedText: "",
},
{
  schedTime: "12",
  schedText: "",
},
{
  schedTime: "13",
  schedText: "",
},
{
  schedTime: "14",
  schedText: "",
},
{
  schedTime: "15",
  schedText: "",
},
{
  schedTime: "16",
  schedText: "",
},
{
  schedTime: "17",
  schedText: "",
}]
function displayTime() {
  let currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(currentTime);
}
setInterval(displayTime, 1000);



for (i = 0; i < allSaveBtns.length; i++) {
  allSaveBtns[i].addEventListener('click', function (event) {

    let button = event.target
    // grab the value from the textarea
    let userTextArea = button.previousElementSibling.value;
    console.log(userTextArea)
   
    //get the id from the parent element google how to uyse parent element method
    $(document).ready(function(){
      $("ul").children("li.second")
    //use the id and the userTextArea to save to local storage

  })
}


let currentHour = moment().hours();
console.log(currentHour);
$(".timeslot").each(function () {

  let hour = $(this).attr('id')
console.log(hour)
  if (currentHour > hour) {
    $(this).children().eq(1).addClass("past");
    
  } else if (currentHour == hour) {
    $(this).children().eq(1).addClass("present");

  } else if (currentHour < hour) {
    $(this).children().eq(1).addClass("future");
  }

})


