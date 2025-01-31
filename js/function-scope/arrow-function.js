// Arrow function
let x;
// Very shorter
/* const arrow = e => e ** 2;
x = arrow(4) */

/* const add = (a, b) => a + b;
x = add(3, 6); */

const customObj = () => ({
  name: 'Monirul',
  course: 'Javascript',
});

x = customObj();
// const { name, course } = x;
// console.log(name, course);
// x = x.course;

// console.log(x)
// console.log(typeof x, x.course);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num, i, arr) => console.log(`${i} - ${num} - ${arr}`));

console.log(x);
