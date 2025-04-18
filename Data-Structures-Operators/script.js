const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, menuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Spread Operator
// What is spread operator?
// answer: It is used to spread the elements of an array or an object into another array or an object.

/* const arr = [7, 8, 9];
const newArr = [1, 2, 3, 4, 5, 6, ...arr];
console.log(newArr); */

/* const menu = [...restaurant.categories, 'Indian'];
console.log(menu); */

/* const mainMenuCopy = [...restaurant.mainMenu, 'Extra'];
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);
 */

// Real world example

// Destructuring Objects
// What is Object Destructuring?
// Answer: It is used to destructure an object into individual variables.

const { name, location, categories, starterMenu, mainMenu } = restaurant;
// console.log(name, location, categories, starterMenu, mainMenu);

// Object Destructuring with rename
const { name: restaurantName, location: localities, categories: foodType } = restaurant;
const { openingHours } = restaurant;

// Default values
/* const { menu = {} } = restaurant;
console.log(menu); */

// Mutating variables
/* let a = 111;
let b = 999;

const obj = { a: 112, b: 998 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b); */

// Nested Objects

/* // const { thu, fri, sat } = openingHours;
console.log(thu); */

/* const {
  sat: { open, close },
} = openingHours;
console.log(open, close); */

/* // Array Destructuring
let [main, , second] = restaurant.categories;
console.log(main, second);

// Switching variable
[main, second] = [second, main];
console.log(main, second);

// Receive values from a funtion
const [starter, main1] = restaurant.order(1, 0);
console.log(starter, main1);

const arr1 = [1, 2, 3, 4, 5, 6];

const newArr = [arr1, 7];

console.log(newArr);

let person = { name: 'John', age: 25 };
console.log(person);

person.age = 255;

console.log(person);

let str = 'Hello';
console.log(str);

str = 'hi';

console.log(str);

function nameSuffler(str) {
  return str.split(' ').reverse().join(' ');
}

// console.log(nameSuffler('monirul Khan'));

const isEmpty = function (obj) {
  return Object.keys(obj).length > 0;
};

console.log(isEmpty([]));
 */
// Nested
/* const [d, e, f, [g, h]] = [1, 2, 3, [4, 5]];
console.log(d, e, f, g, h); */

// Default Parameter

/* const [a, b, c, d, e = 10, f = 0] = restaurant.starterMenu;
console.log(a, b, c, d, e, f); */
