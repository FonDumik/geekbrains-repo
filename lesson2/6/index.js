"use strict";

let str = "x";
console.log(str);
for (let x = 0; x < 20; x++) {
  console.log((str += "x"));
}
