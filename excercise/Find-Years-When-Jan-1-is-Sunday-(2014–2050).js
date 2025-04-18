for (let year = 2000; year <= 2050; year++) {
  let day = new Date(year, 0, 1);
  // console.log(day);
  // console.log(i);
  if (day.getDay() === 0) {
    // console.log('1st January is being a Sunday  ' + year);
  }
}
