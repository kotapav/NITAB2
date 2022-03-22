var products = [
  {
    pname: "Apple",
    pmodel: "Iphone 13",
    price: 110000,
  },
  {
    pname: "oneplus",
    pmodel: "oneplus 9 pro",
    price: 80000,
  },
  {
    pname: "oneplus",
    pmodel: "oneplus 9",
    price: 60000,
  },
  {
    pname: "vivo",
    pmodel: "Vivo A23",
    price: 40000,
  },
];

console.log(products.length);

var filteredData = products.filter(function (element) {
  return element.price < 90000;
});

console.log(filteredData);
