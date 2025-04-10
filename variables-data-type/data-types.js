// String
const firstName = 'Monirul';
// console.log(firstName, typeof firstName)

// Number
const age = 37;
const temp = 98.3;
// console.log(age, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNum = null;
console.log(aptNum, typeof aptNum);

// Undefined
let score;
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigIng
const n = 1234567890n;
console.log(n, typeof n);

// Reference Types
const person = {
  name: 'Monirul',
  prof: 'Frontend Developer',
};

console.log(person, typeof person);

function sayHello() {
  console.log('hello');
}
const output = sayHello();

console.log(output, typeof output);
