// Revisão forEach

// forEach é um método que executa uma dada função em cada elemento de um array.

// forEach classico
const approveds = ['João', 'Maria', 'Antônio'];
console.log('forEach clássico: ');
approveds.forEach((name, index) => console.log(name, index));

// forEach com função
const showApproved = (approved, index) => console.log(approved, index);

console.log('----');
console.log('forEach com função: ');
approveds.forEach(showApproved);

// Exemplo forEach em uso diario

const descontProducts = [
  { name: 'Notebook', price: 2500, discount: 0.15 },
  { name: 'Smartphone', price: 1500, discount: 0.1 },
  { name: 'Tablet', price: 1000, discount: 0.05 },
];

descontProducts.forEach((descont) => {
  const descontValue = descont.price * descont.discount;
  const originalPrice = descont.price;
  console.log(
    `Produto: ${descont.name}, Preço original: ${originalPrice}, Desconto de: ${descontValue}`
  );
});
