// Revisão Filter
// remover elementos indesejados de um array => filtrar

const duplicatedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
const uniqueArray = duplicatedArray.filter(
  (element, index, array) => array.indexOf(element) === index
);

// console.log(duplicatedArray);
// console.log('Utilizando Filter para remover numeros duplicados', uniqueArray);

// Exemplo 2

const products = [
  { name: 'Mouse Sem Fio', price: 30, fragile: true, rating: 10 },
  { name: 'Teclado Mecânico', price: 800, fragile: true, rating: 9 },
  { name: 'Cadeira Gamer', price: 120, fragile: false, rating: 2 },
  { name: 'Cadeira de Escritório', price: 100, fragile: false, rating: 3 },
  { name: 'Monitor 24', price: 300, fragile: true, rating: 10 },
  { name: 'Monitor 24', price: 300, fragile: true, rating: 1 },
];

const fragileProducts = products.filter((product) => product.fragile);
const expensiveProducts = products.filter((product) => product.price >= 500);
const highRatingProducts = products.filter((product) => product.rating >= 5);
const lowerRatingProducts = products.filter((product) => product.rating <= 4);

console.log('Produtos Frágeis', fragileProducts);
console.log('Produtos Caros', expensiveProducts);
console.log('Produtos com boa avaliação', highRatingProducts);
console.log('Produtos com avaliação baixa', lowerRatingProducts);
