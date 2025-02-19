let x;

// Function declaration
/* function addDollarSign(price) {
  return '$' + price;
}
x = addDollarSign(10); */

// Functio Expression
const addRupeeSign = function (price) {
  return 'Rs' + price;
};

x = addRupeeSign(100);

console.log(x);
