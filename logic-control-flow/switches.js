let x;
const d = new Date('2006-05-01T03:24:00');
// x = d.getDay();
// x = d;
const month = d.toLocaleDateString('default', { weekday: 'long' });
x = month;
console.log(x);
