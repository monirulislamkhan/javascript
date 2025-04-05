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

// Array Destructuring
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

console.log(isEmpty());
