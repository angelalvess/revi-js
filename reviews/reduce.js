// Revisando Reduce

// Somar o total de lançamentos de foguetes de todos os países
// acc = acumulador, passar valor inicial 0
// elem = valor atual

const rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe(ESA)', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 },
];

const totalLaunches = rockets.reduce((acc, elem) => acc + elem.launches, 0);

console.log('Total de lançamentos de foguetes: ', totalLaunches);

const perfumes = [
  { brand: 'Dior', price: 1500 },
  { brand: 'Channel', price: 950 },
  { brand: 'Mugler', price: 500 },
];

const spentPerfumes = perfumes.reduce((acc, element) => acc + element.price, 0);

console.log(`Meu gasto com perfumes foi: ${spentPerfumes}`);
