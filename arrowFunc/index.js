// function expression
(() => {
  function sumExpression(a, b) {
    return a + b;
  }
  console.log(sumExpression(1, 2)); // 3

  // arrow function
  const sumArrow = (a, b) => a * b;
  console.log(sumArrow(50, 5)); // 3

  // arrow function without parameters
  const favoriteAlbum = () => 'Utopia';
  console.log(favoriteAlbum());

  // arrow function with one parameter
  const favoriteAlbum2 = (album) => album;
  console.log(favoriteAlbum2('Vespertine'));

  const multiply = (number) => number * 2;
  console.log(multiply(50));

  const age = (year) => {
    if (year >= 18) {
      return ` Maior de idade: ${year} anos`;
    }
    return ` Menor de idade: ${year} anos`;
  };
  console.log(age(19));

  // arrow function with two parameters
  const favoriteAlbum3 = (album1, album2) =>
    `Meus álbuns favoritos são ${album1} e ${album2}.`;

  console.log(favoriteAlbum3('Homogenic', 'Post'));

  // usando arrow com this

  function Person() {
    this.year = 0;

    setInterval(() => {
      this.year++;
      console.log(`O this é : ${this}`);
      console.log(this.year);
    }, 1000);
  }
  // const person1 = new Person();
})();
