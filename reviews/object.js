// Revisão Object

const user = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
  adress: {
    city: 'Rio do Sul',
    state: 'SC',
  },
};

// usar in para verificar se a propriedade existe no objeto
// console.log('adress' in user);
// console.log('color' in user);

// Object.keys(user) retorna um array com as chaves do objeto
console.log('keys:');
console.log(Object.keys(user));
console.log('---');

// Object.values(user) retorna um array com os valores do objeto
console.log('values:');
console.log(Object.values(user));
console.log('---');

// Object.entries(user) retorna um array com arrays contendo [nome_prop, valor_prop]
console.log('entries:');
console.log(Object.entries(user));
