(() => {
  // arrow function sem parâmetros
  const intro = () => {
    const name = 'Angel';
    const age = 23;
    const profession = 'Software Developer';

    return `Hello, my name is ${name}, I'm ${age} years old and I'm a ${profession}.`;
  };

  console.log(intro());

  // arrow function com parâmetros
  const intro2 = (name, age, profession) => {
    return `Hello, my name is ${name}, I'm ${age} years old and I'm a ${profession}.`;
  };

  console.log(intro2('Angelina', 21, 'Developer'));
})();
