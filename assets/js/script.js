let timeDisplayEl = $("#time-display");
let listGroupEl = $(".timeslot");
let timeSlots = document.querySelectorAll(".timeslot");
let btnContainer  = $(".button-container")
let i = 0;

function displayTime() {
  let currentTime = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(currentTime);
}
setInterval(displayTime, 1000);

    let currentHour = moment().hours();
    $(".timeslot").each(function () {
      let hour = $(this).attr("id")
           if (currentHour > hour) {
        $(this).children().eq(1).addClass("past");

      } else if (currentHour == hour) {
        $(this).children().eq(1).addClass("present");

      } else if (currentHour < hour) {
        $(this).children().eq(1).addClass("future");
      }
    })
 
$(".saveBtn").on("click", function() {
  let time = $(this).parent().attr("id");
  let appt = $(this).prev().val();
  localStorage.setItem(time,appt)
  
});

$('.timeslot').each(function(i){
  let currentValue= localStorage.getItem($(this).attr('id'))
  $(this).children().eq(1).val(currentValue)
})