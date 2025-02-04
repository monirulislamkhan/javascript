const data = fetch('https://api.github.com/users/monirulislamkhan/repos')
  .then((res) => res.json())
  .then((gitData) => console.log(gitData));

console.log(data);
