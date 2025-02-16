let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// const arr = [10, 20, 30, 40, 50];
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// i = 0;
// // Nesting while loops
// while (i < 3) {
//   console.log(`Outer While loop ${i}`);
//   let j = 1;
//   while (j <= 5) {
//     console.log(`Inner ${j}`);
//     j++;
//   }
//   i++;
// }
// console.log(i);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
