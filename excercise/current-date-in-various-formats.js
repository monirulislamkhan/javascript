/* Get Current Date in Various Formats

Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
let x;
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

function padStart(value) {
  return value.toString().padStart(2, '0');
}

const mmddyyyy_dash = `${padStart(month)}-${padStart(day)}-${year}`;
const mmddyyyy_slash = `${padStart(month)}/${padStart(day)}/${year}`;
console.log(mmddyyyy_dash);
console.log(mmddyyyy_slash);
// extra
