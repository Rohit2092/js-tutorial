//map funtion 

let numbers = [1,2,3];
//map function will always return a new array 
let doubleNumbers = numbers.map((e)=>e*2);
console.log(doubleNumbers);

// filter 
let num = [1,2,3,4,5];
let evenNum = num.filter((e)=>e%2==0);
console.log(evenNum);

let employees = [
    {name : "Rohit", age: 26, gender :"male"},
        {name : "Ankur", age: 44, gender :"male"},

  {name : "test", age: 36, gender :"female"},
    {name : "Rohit", age: 26, gender :"male"},
]
let overthirty = employees.filter((emp)=>{
    return emp.gender=="female"&& emp.age>30;
});
console.log(overthirty);

// reduce function 
let numb = [1,2,3,4,5,6];
let sum = numb.reduce((acc,num)=>acc+num, 0);
console.log(sum);
// max number in the array

let top = [2,5,8,10,33,45];
let maxNum = top.reduce((max,num)=>{
    if ((num>max)){
        return num;
    }
        else {
            return num;
        }
    }, top[0]);

console.log(maxNum);

// total amount of a cart 
let cartItems =[
    {name:"jeans", price : 500},
        {name:"shirt", price : 200},

            {name:"tshirt", price : 100},

                {name:"shoe", price : 400},

                    {name:"hat", price : 50},


];


let totalCost = cartItems.reduce((total, items )=> total+items.price, 0);

console.log(totalCost);

