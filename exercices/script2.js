const morning = (name, hour) => {
  return `Good morning ${name}, it is ${hour} o'clock`;
};

const tellingHour = morning('John', 8);
console.log(tellingHour);

const calculator = (a, b, op) => {
  if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  } else if (op === '*') {
    return a * b;
  } else if (op === '/') {
    return a / b;
  } else {
    console.log('Invalid operator ');
  }
};

const result = calculator(5, 10, '*');
console.log(result);
