let timeDisplayEl = $('#time-display');
let listGroupEl = $('.timeslot');
let allSaveBtns = document.querySelectorAll("button");
let timeSlots = document.querySelectorAll("timeslot");
let i = 0;
let localStores = [{
schedTime: "9",
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



for( i = 0; i < allSaveBtns.length; i++){
  allSaveBtns[i].addEventListener('click', function(){
   // grab the value from the textarea
let userTextArea = this.previousSibling.previousSibling.value;

// save to local storage

  })
}
let currentHour = moment().format("hh");
// const timeSlots = document.querySelectorAll("timeslot");
for( i = 0; i < timeSlots.length; i++) {
  if (currentHour > timeSlots[i].getAttribute('militaryTime'))
  $("timeslot").addClass("#past");
} else if (currentHour === timeSlots[i].getAttribute('militaryTime')) 
{
  $("timeslot").addClass("#present");
} else if (currentHour < timeSlots[i].getAttribute('militaryTime')) 
{
  $("timeslot").addClass("#future");
}
 
  //current
 
    //add the css class to that row
  }

}


