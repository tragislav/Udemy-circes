"use strict";

const arr = [2, 13, 62, 8, 10];

arr.sort(compareNum);

// arr[99] = 0;
// console.log(arr.length);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, index, array) {
    console.log(`index ${index}: ${item} inside array ${array}`);
});

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));