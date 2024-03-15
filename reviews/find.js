// find and findIndex

const numbers = [3, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const par = numbers.find((number) => number % 2 === 0);
const indexPar = numbers.findIndex((number) => number % 2 === 0);

console.log('Achando o par utilizando find:', par);
console.log('Achando o index do par utilizando findIndex:', indexPar);
