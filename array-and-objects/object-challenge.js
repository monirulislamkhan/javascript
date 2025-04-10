let x;

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
];

const readValue = library.map((value) => (value.status.read = true));

x = library;

// const toString = JSON.stringify(library)

// x = toString;

const { title: firstBook } = library[0];

x = firstBook;

console.log(x);
