let x;
// Get Celsius from Fahrenheit
/* function getCelsius(value) {
  const celsius = (value - 32) * 9;
  return `The temperature is ${celsius}\xB0C`;
}
x = getCelsius(32); */

function minMax(value) {
  console.log(value);
  const min = Math.min(...value);
  const max = Math.max(...value);
  // console.log(min);
  return {
    min: min,
    max: max,
  };
}
x = minMax([1, 2, 3, 4, 5, 6, 9, 19]);

(function (length, width) {
  const area = length * width;
  const output = `The area of a ractangle with a length of ${length} and width of ${width} is ${area}`;
  return console.log(output);
})(19, 10);

console.log(x);
