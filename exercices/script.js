// // Exercise 1

// const sayMyName = (name) => {
//   const age = sayMyAge();
//   return `Your name is: ${name}, ${age}`;
// };
// const sayMyAge = (age = 23) => {
//   return `Your are ${age} old!`;
// };

// const yourName = sayMyName('Angel');
// console.log(yourName);

const randomInfos = (name, favAlbum, favMovie) => {
  const yourName = name;
  const album = favAlbum;
  const movie = favMovie;
  const completeInfo = `Your name is ${name},
    favorite album ${favAlbum}
     and your favorite movie is ${favMovie}.`;
  return completeInfo;
};

const nicknameAndAge = (nickname, color) => {
  const nick = nickname;
  const favColor = color;
  const result = `My friends call me ${nick} and my favorite color is ${favColor}`;
  return result;
};

const multiply = (num1, num2) => num1 * num2;

const infosAngie = randomInfos('Angel', 'Utopia', 'Fallen Angels');
console.log(infosAngie);

const nickAndAge = nicknameAndAge('Angie', 'Red');
console.log(nickAndAge);

console.log(multiply(5, 10));

// praticando arrays

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const triplicateArray = array.map((number, index, arr) => {
  return `Index: ${index} - Number: ${number}, Array : ${arr}`;
});

const aboveFour = array.filter((number) => number > 3);
const totalArray = array.reduce((acc, number) => acc + number, 0);

console.log('----------------');
console.log(triplicateArray);
console.log(aboveFour);
console.log(totalArray);

// arrays of objects

const people = [
  { name: 'Angel', age: 23, coder: false },
  { name: 'Jhon', age: 25, coder: false },
  { name: 'Luis', age: 30, coder: true },
  { name: 'Maria', age: 20, coder: false },
  { name: 'Sofia', age: 15, coder: true },
];

const names = people.map((person) => person.name);
const totalAges = people.reduce((acc, element) => acc + element.age, 0);
const isCoder = people.filter((person) => person.coder);
const notCoder = people.filter((person) => !person.coder);

console.log(`A idade de todas pessoas calculadas é: ${totalAges}`);
console.log('Pessoas que são programadoras: ', isCoder);
console.log('Pessoas que não são programadoras: ', notCoder);
