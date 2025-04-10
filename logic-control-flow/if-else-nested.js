let x;
const hour = new Date(2025, 0, 31, 16, 30, 0).getHours();
const actualValue = hour;

// if (hour < 12) {
//   x = 'Good Morning';
// } else if (hour < 18) {
//   x = 'Good Afternoon';
// } else {
//   x = 'Good Night zzz';
// }

if (hour <= 13) {
  if (hour <= 7) {
    x = 'Wakeup Hurry Up';
  } else {
    x = 'Good morning';
  }
} else if (hour < 18) {
  x = 'Good Afternoon';
} else {
  x = 'Good night';
}

console.log(actualValue, x);
