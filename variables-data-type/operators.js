let x;
x = 5 + 5;
// x = 7/5;
x += 9;
x -= 1;
x *= 3;
x /= 3;
x %= 4;
x = 2;
x **= 5;

x = '2';
// Equal to (just value is equal, not type)
x = 2 == '2';
// Check (value and type is equal)
x = 2 === '2';

x = '2' !== 2;

x = 10 > 5;

// /create a table value
function tableNum(num = 1) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

tableNum(5);

// console.log(x, typeof x);
