// Revisão Some

// usar quando for preciso testar se pelo menos um dos elementos de um teste específico.

// função que verifica se um número é primo
function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// retorna true, porque pelo menos um dos elementos é primo (7)
const arrayNumbers = [4, 6, 7, 8, 10, 12];
const isPrimeNumber = arrayNumbers.some((number) => isPrime(number));

console.log('Is it a prime number? ', isPrimeNumber); // true

// exemplo 2
// verificar se pelo menos um membro da equipe é piloto
// return true porque John é piloto

const team = [
  { id: 1, name: 'John', pilot: true },
  { id: 2, name: 'Paul', pilot: false },
  { id: 3, name: 'Ringo', pilot: false },
  { id: 4, name: 'George', pilot: false },
];

const teamHasPilots = team.some((member) => member.pilot);
console.log('Team has a pilot ?', teamHasPilots); // true
