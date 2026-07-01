//function declaration 
function add (a,b){
    return a+b;
}
const ab= add(5,6);
console.log(ab);
// function expression : Annonymous function 

const multiply = function (x,y){
    return x*y;
}
const mul = multiply(5,6);
console.log(mul);

// Arrow function expression 

const divide = (t1,t2) => t1/t2;
const div = divide(20,2);
console.log(div);

// function constructor : last argument will behave like function body 

const subs = new Function('d', 'e', 'return d-e; ')
const ss = subs(10,5);
console.log(ss);

// IIFE (immediately invoked function expression )
(function(){
    console.log("the server is up and running");
})();
