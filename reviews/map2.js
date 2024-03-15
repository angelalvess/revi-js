const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((element) => {
  return element * 2;
});

// console.log(doubledNumbers);

// Exercise 1

const cars = [
  '{ "make": "Ford", "model": "Fiesta", "color": "Red" }',
  '{ "make": "BMW", "model": "Fiesta", "color": "Blue" }',
  '{ "make": "Fiat", "model": "500", "color": "White" }',
];

const carToObject = (json) => JSON.parse(json);
const onlyColor = (car) => car.color;
const result = cars.map(carToObject).map(onlyColor);
console.log(result);
