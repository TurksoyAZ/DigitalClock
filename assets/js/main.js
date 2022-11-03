// let monate = [
//   "Januar",
//   "Februar",
//   "März",
//   "April",
//   "Mai",
//   "Juni",
//   "Juli",
//   "August",
//   "September",
//   "Oktober",
//   "November",
//   "Dezember",
// ];

// let wochenTag = [
//   "Sonntag",
//   "Montag",
//   "Dienstag",
//   "Mittwoch",
//   "Donnerstag",
//   "Freitag",
//   "Samstag",
// ];

// let d = new Date();

// console.log(d.getMonth() + " Monat");
// console.log(d.getDate() + " Tag");
// console.log(d.getHours() + " Stunde");
// console.log(d.getMinutes() + " Minute");

// console.log(monate[d.getMonth()]);
// console.log(wochenTag[d.getDay()]);
//=========================================================================

let dayOutput = document.getElementById("dayOutput");
let haursOutput = document.getElementById("haursOutput");
let minOutput = document.getElementById("minOutput");
let secOutput = document.getElementById("secOutput");
let periodOutput = document.getElementById("periodOutput");

let wochenTag1 = [
  "Sun", //0
  "Mon", //1
  "Tue", //2
  "Wed", //3
  "Thu", //4
  "Fri", //5
  "Sat", //6
];

function time() {
  let d = new Date();

  let hours = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let week = wochenTag1[d.getDay()];

  hours < 10
    ? (haursOutput.innerHTML = "0" + hours)
    : (haursOutput.innerHTML = hours);
  min < 10 ? (minOutput.innerHTML = "0" + min) : (minOutput.innerHTML = min);
  sec < 10 ? (secOutput.innerHTML = "0" + sec) : (secOutput.innerHTML = sec);

  dayOutput.innerHTML = week;

  if (hours <= 12) {
    periodOutput.innerHTML = "AM";
  } else {
    periodOutput.innerHTML = "PM";
  }
}

setInterval(time, 1000);
