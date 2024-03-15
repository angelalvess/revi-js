// Revisão Map
// Map utilizado para mapear um array para outro array do mesmo tamanho
// Tem como usar return
// Não modifica o array original e não modifica o tamanho do array

// Exemplo com números
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const doubleNumbers = numbers.map((number) => number * 2);

console.log('Array Original', numbers);
console.log('Utilizando Map', doubleNumbers);
console.log('-------------------------');

// Exemplo com temperatura de farheneit para celsius

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = fahrenheit.map((elem) => Math.round(((elem - 32) * 5) / 9));

console.log('Fahrenheit', fahrenheit);
console.log('Convertendo para Celsius utilizando Map', celsius);
