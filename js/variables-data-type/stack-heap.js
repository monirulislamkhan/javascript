// Value is store in stack
const name = 'Monirul';
const age = 31;

// Reference store in the heap

const person = {
  name: 'Monirul',
  age: 35,
};

let newName = name;

console.log(name, newName);

newName = 'Mr. Monirul';
console.log(name, newName);

console.log(person);

let newperson = person;
console.log(newperson);

newperson.name = 'Rohit';

console.log(person, newperson);
