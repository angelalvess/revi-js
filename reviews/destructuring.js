// Revisão destructuring (desestruturação) em objetos

const user = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
  adress: {
    city: 'Rio do Sul',
    state: 'SC',
  },
};

// Destrucuring

const { age, adress, color = 'Red' } = user;

console.log(age);
console.log(adress);
console.log(color);
console.log('---');

// Destructuring em parâmetros de funções
function showName({ name, age }) {
  return `${name} tem ${age} anos.`;
}

console.log(showName(user));
