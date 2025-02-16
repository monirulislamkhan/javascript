// setTimeout(function () {
//   console.log('call from settime out');
// }, 3000);

// console.log('call from global');

// const timefun = () => console.log('call from settime out');
// setTimeout(timefun, 2000);

// console.log('call from global');

//
// console.log('call according to async1');

// function changeText() {
//   document.querySelector('h1').textContent = 'Changed';
// }

// setTimeout(changeText, 2000);
// document.querySelector('h1');

// const timerId = setTimeout(changeValue, 2000);

// function changeValue() {
//   document.querySelector('h1').textContent = 'Hello from callback';
// }

// document.getElementById('cancel').addEventListener('click', () => {
//   clearTimeout(timerId);
//   console.log(timerId, Boolean(timerId));
// });

// const timerId = setTimeout(changeValue, 3000);

// function changeValue() {
//   document.querySelector('h1').textContent = 'Change value';
// }

// document.querySelector('#cancel').addEventListener('click', () => {
//   clearTimeout(timerId);
//   console.log(timerId);
//   console.log('Timer cancelled');
// });
