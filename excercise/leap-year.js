// const isleapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
const isleapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isleapYear(2024));

// const day = new Date('2016-12-31');
// console.log(day);

for (var year = 2000; year <= 2050; year++) {
  // Create a Date object for January 1st of the current year
  var d = new Date(year, 0, 1);
  console.log(d);

  // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
  if (d.getDay() === 0) {
    // Log a message if January 1st is a Sunday for the current year
    console.log('1st January is being a Sunday  ' + year);
  }
}
