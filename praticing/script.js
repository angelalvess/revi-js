const sayNameAge = (name, age) => {
  return `My name is ${name} and I am ${age} years old`;
};

const say1 = sayNameAge('Angel', 23);
console.log(say1);

const calculator = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'Invalid operator';
  }
};

const result1 = calculator(2, 3, '+');
const result2 = calculator(5, 5, '*');
console.log(result1);
console.log(result2);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  alert('Button clicked');
  console.log('Button clicked pela class');
});
