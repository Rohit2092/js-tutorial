const squrarenumber = num => num * num ;
// We do not need parantheses here 
const result = squrarenumber(5);
console.log(result);

// no parameter arrow function 

const msg = ()=> "hello javascript";
console.log(msg());

// when you have two paramenters then mandatory you need to give paranthesis 
const sum = (a,b) => a+b;
console.log(sum(4,5));

// rest param 
const suum = (...numbers) => numbers.reduce((acc,num) => acc+num,0);
const totalsum = suum(1,2,3,4,5,6);
console.log(totalsum);

// max using math 

const maxi = (a,b,c) => {
    return Math.max(a,b,c);
}
const ss = maxi(22,44,2);
console.log(ss);

