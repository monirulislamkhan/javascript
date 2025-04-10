function first() {
  const x = 100;
  function second() {
    const y = 200;
    return x + y;
  }
  second();
}

console.log(first());
