// Rest operator

// fazendo desestruturação do objeto e pegando o resto das propriedades

const user = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
  adress: {
    city: 'Rio do Sul',
    state: 'SC',
  },
};

const { age, ...rest } = user;

console.log('Idade:', age);
console.log('Rest:', rest);

// Rest operator em arrays

const array = [1, 2, 3, 4];
const [a, ...arrayRest] = array;

console.log('Array completo:', array);
console.log('a:', a);
console.log('Rest array:', arrayRest);
