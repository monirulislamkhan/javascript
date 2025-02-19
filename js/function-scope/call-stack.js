// Open 'sources' tab and put a breakpoint at the first() function

// First Example
// function first() {
//   console.log('first........');
// }

// function second() {
//   console.log('Second...');
// }

// function third() {
//   console.log('Third');
// }

// first();
// second();
// third();

// Second Example
function first() {
  console.log('first......');
  second();
}

function second() {
  console.log('second');
  third();
}

function third() {
  console.log('third');
}
first();
second();
third();
