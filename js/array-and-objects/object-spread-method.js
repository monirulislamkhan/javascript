'use strict';
let x,
  y = '';

const todo = new Object();
todo.id = 1;
todo.name = 'Monirul';
todo.age = 29;
todo.isAdmin = true;

const person = {
  name: 'Monirul',
  age: 29,
  address: {
    street: 'Shirakole Majher Hat',
    city: 'Kolkata',
    country: 'INDIA',
    coords: {
      lat: 22.5726,
      long: 88.3639,
    },
  },
};

x = todo;

x = person;
x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

x = obj3;
const obj4 = Object.assign({}, person);

x = obj4;

x = Object.keys(todo);
x = Object.values(todo);
x = Object.entries(todo);
// x = person.hasOwnProperty(age);
x = person.hasOwnProperty('address');

const firstName = 'Monirul';
const lastName = 'Khan';
const age = 29;

const person1 = {
  firstName,
  lastName,
  age,
};

// const {newNeme:name} = todo;
const todo1 = {
  id: 1,
  title: 'Learn JS',
  user: {
    name: 'Monirul',
    age: 29,
  },
};

const {
  id,
  title,
  user: { name: objName },
} = todo1;

x = person1;
// (x = todoId), title;
x = objName;
// Object Destructuring

const user = {
  name: 'Monirul Khan',
  age1: 29,
};
const { name, age1: userAge } = user;
x = name;
y = userAge;

y = `My name is ${name} and I am ${userAge} years old.`;

console.log(x, y);
