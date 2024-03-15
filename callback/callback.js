const button = document.querySelector('button');

const handleClick = () => {
  console.log('You clicked me!');
};

button.addEventListener('click', handleClick);

console.log('This will log first');
