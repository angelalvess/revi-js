// Optional  Chaining (?.)
// Nullish Coalescing Operator (??)

const user = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
  adress: {
    street: 'Rio do Sul',
    number: 170,
    zip: {
      code: 89160000,
      city: 'Rio do Sul',
    },
  },
};

console.log(user.adress?.zip?.code ?? ' Não encontrado');
