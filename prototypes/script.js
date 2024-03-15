// usando objeto literal
const p1 = {
  name: 'smartphone',
  price: 1000,
  stock: 10,
};

console.log(p1);

// usando função construtora para criar objetos
const Product = function (name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
};

Product.prototype.total = function () {
  return this.price * this.stock;
};

Product.prototype.addStock = function (amount) {
  this.stock += amount;
};

Product.prototype.removeStock = function (amount) {
  if (this.stock >= amount) this.stock -= amount;
};

const p2 = new Product('Notebook', 500, 5);
console.log(p2);
console.log(p2.total());

p2.addStock(10);
console.log(p2);

p2.removeStock(5);
console.log(p2);
