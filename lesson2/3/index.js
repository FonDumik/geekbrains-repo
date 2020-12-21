"use strict";

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

let discount = 0.15,
  discountSum;

products.forEach((element) => {
  discountSum = element.price * discount;
  element.price -= discountSum;
});
