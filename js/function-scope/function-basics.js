let x;

// Define a function
function message() {
  console.log('Hi I ');
}

message();

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 3));

function registerUser(user = 'Bot') {
  // Old way
  /* if(!user){
    user = "Predefined user"
  } */
  return user + ' is registered';
}

x = registerUser();

function total(...restNum) {
  let restAll = 0;
  // Below two method not working
  // restAll.reduce((prev, current) => prev + current, 0);
  // restNum.map((val) => val + val);

  // for (let i = 0; i < restNum.length; i++) {
  //   restAll += restNum[i];
  // }
  for (const num of restNum) {
    restAll += num;
  }
  return restAll;
}

x = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// x = total(2);

const user = {
  id: 1,
  userName: 'Mohit',
  age: 3,
};

// Object as parameters
function loginUser(user) {
  return `The user ${user.userName} with the id of ${user.id} is login`;
}

x = loginUser(user);

function getRandom(arr) {
  const randomVal = Math.floor(Math.random() * arr.length);
  console.log(randomVal);
  return arr[randomVal];
}

x = getRandom(1, 2, 3, 4, 5, 6);

console.log(x);
