(() => {
  const angel = 23;
  const mozi = 21;
  const sol = 23;

  // usando parâmetros e variaveis de fora
  const sumAges = (age1, age2, age3) => age1 + age2 + age3;

  const favsAge = sumAges(angel, mozi, sol);
  console.log(favsAge);

  //

  // usando funções dentro de funções

  const trannyWorld = () => {
    console.log('Mundinho futa');
    return 55;
  };

  const intro = (name, album, artist) => {
    const returnTrannyWorld = trannyWorld();
    console.log(`Return da function trannyWorld: ${returnTrannyWorld}`);

    const favAlbum = `I'm ${name} and my favorite album is ${album} by ${artist}.`;
    return favAlbum;
  };

  const angelFavAlbum = intro('Angie', 'The Dark Side', 'Pink Floyd');

  console.log(angelFavAlbum);
})();
