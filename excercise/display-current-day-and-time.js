// sources:https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
/* 
Display Current Day and Time
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */

// Old way
/* const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = new Date();
const today = days[day.getDay([days])]; */

// Modern way
const today = new Date();

const dayName = Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today);
console.log('Today is : ' + dayName);

const hours = today.getHours() -10;
// console.log(typeof hours);
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const amPm = hours >= 12 ? 'PM' : 'AM';

function pad(value) {
  return value.toString().padStart(2, '0');
}

const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${amPm}`;
console.log(`Formatted time: ${timeString}`);
