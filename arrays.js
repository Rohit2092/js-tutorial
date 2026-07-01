let myArray= [];

let num = [1,2,3,4,5];
let lan = ["java", "python", "javascript"];

// push method 
lan.push("ruby");
console.log(lan);

// pop 
//remove the last element from the arrays.
num.pop();
console.log(num);

// shift 
// it will remove the first element and return that element

console.log("------")

let first= lan.shift();
console.log(first);

// unshift 
// add and return the 
let col = ["green", "red","yellow"];
col.unshift("blue");
console.log(col.length);

// splice 
// allow you to add or remove element from the specific index of an array 

let animals = ["dog", "cat", "cow"];
animals.splice(1,1,'bear');

console.log(animals);

// slice 
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,2);
console.log(newPop);

// concat 

let fr = ["apple", "orange","guava","cocunut"];
let nuum = [1,2,3,4];
let mixedArray = fr.concat(nuum);
console.log(mixedArray);

// indexOf 

let color = ["red", "yellow", "green","red"];
let indexRed = color.indexOf("red");
console.log(indexRed);

// 2nd red index 
let redSecondIndex = color.indexOf("red", 2);
console.log(redSecondIndex);

//includes 

let test = ["rohit", "ankur","vikas","mohit"];

let flag = test.includes ("rohit");
console.log(flag);

// for each 
let n = [1,2,3,4,5,];
n.forEach((e)=>{
    console.log(e);
})




