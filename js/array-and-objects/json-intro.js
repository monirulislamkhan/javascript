let x;

const post = {
  id: 1,
  title: 'This is title',
  body: 'Thi is body',
};

x = post;

// Convert to Json String
const str = JSON.stringify(post);

x = str;
// Parse Json
const obj = JSON.parse(str);

x = obj;

x = Object.keys(obj);
x = Object.values(obj);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const convertString = JSON.stringify(posts);
x = convertString;

const stringToObject = JSON.parse(convertString);
x = stringToObject;

console.log(x);
