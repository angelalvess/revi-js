const birthday = (day, month, year) => {
  const yourBirthday = `Your birthday is ${day}/${month}/${year}`;
  const yourAge = `you are ${2024 - year} years old.`;
  return `${yourBirthday} and ${yourAge}`;
};

const yourBirthday = birthday(7, 10, 2000);
console.log(yourBirthday);

const hobbies = (hobby1, hobby2, hobby3) => {
  return `Your hobbies are ${hobby1}, ${hobby2} and ${hobby3}`;
};

const yourHobbies = hobbies('reading', 'swimming', 'dancing');
console.log(yourHobbies);

const favAlbumAndArtist = (album, artist) => {
  const yourFavAlbum = `Your favourite album is ${album}`;
  const yourFavArtist = `Your favourite artist is ${artist}`;
  return `${yourFavAlbum} and ${yourFavArtist}`;
};

const years = (age) => {
  return age;
};

const yearsOld = years(28);
console.log(yearsOld);

const sum = (num1, num2) => {
  return num1 + num2;
};

const total = sum(5, 10);
console.log(total);

const multiply = (num1, num2) => num1 * num2;
const result = multiply(5, 10);
console.log(result);

console.log('testing git to git-hub');

console.log('testing stanging branch');
