// Revisão Every
// usar quando for preciso testar se todos os elementos de um teste específico.
// filter retorna um novo array, every retorna um booleano.

// retorna false, porque nem todos os elementos são maiores que 10
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // false
const above10 = number1.every((elem) => elem > 10);

// retorna true, porque todos os elementos são maiores que 20
const number2 = [30, 40, 50, 60, 70, 80, 90, 100]; //
const above20 = number2.every((elem) => elem > 20);

console.log('Todos os elementos são maior que 10?');
console.log(above10);

console.log('Todos os elementos são maior que 20?');
console.log(above20);

console.log('---');

// Verificar se todos tem mais de 18 anos

// retorna false, porque nem todos os elementos são maiores que 18
const people = [
  { name: 'Luisa', age: 25 },
  { name: 'Luisa', age: 22 },
  { name: 'Luisa', age: 19 },
  { name: 'Luisa', age: 17 },
];

const allAdults = people.every((person) => person.age >= 18);
const sameNames = people.every((person) => person.name === 'Luisa');

console.log('Todos são maiores de 18?');
console.log(allAdults); // false

console.log('Todos tem o mesmo nome?');
console.log(sameNames); // true
