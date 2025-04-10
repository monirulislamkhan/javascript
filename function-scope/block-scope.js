const x = 100;
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

// console.log(y) //Y is not defined

// for (let i = 1; i <= 5; i++) {
//   console.log(`This is Outer ${i}`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(j);
//   }
// }

if (true) {
  const a = 500;
  let b = 600;
  // let c = 700;
  var c = 700;
}
console.log(c);

// var function scope
function run() {
  var d = 100;
  console.log(d);
}
run();
console.log(d);
