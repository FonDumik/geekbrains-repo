"use strict";

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    if (i == 0) {
      console.log(i + " - это ноль");
      continue;
    }
    console.log(i + " - это четное число");
    continue;
  } else {
    console.log(i + " - это нечетное число");
  }
}
