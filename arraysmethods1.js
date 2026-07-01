// every method 
let num = [1,2,3,44,4];
let flag = num.every((e)=> e<10);
console.log(flag);

// some - one element in the arrys passes the condition 
let numb = [1,2,3,44,4];
let fg = numb.some((e)=>e % 2 == 0);
console.log(fg);

// find method - return the value of first element that satisfies the given condition.

let total = [1,2,4,5,66,44];
let first = total.find((e)=>e%2==0);
console.log(first);

// index of 
let frt = ["apple", "banana", "mango"];
let mangoindex = frt.indexOf("apple");
console.log(mangoindex);

// last index of 
let veg = ["potata", "tomato","onion","chilly","potato","potato"];
let last = veg.lastIndexOf("potato");

console.log(last);

// reverse 
let vegi = ["potata", "tomato","onion","chilly","potato","potato"];
let reverseveg = vegi.reverse();
console.log(reverseveg);

// sort
let products = ["mac","imac","tab","iphone"];
let sorted = products.sort();
console.log(sorted);


