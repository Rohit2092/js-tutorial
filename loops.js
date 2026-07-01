// three types of loops 
// for loop 
// 1 to 10
for (let i =1; i<=10;i++){
    console.log(i);
}
console.log("----------")

// for ...of loop:
const list = [1,2,3,4,5];
for(const e of list){
    console.log(e);
}
// 
//while loop 
let p = 1;
while(p<=10){
    console.log(p);
    p++;
}

console.log("----------")

// do-while 
let h = 1;
do {
    console.log(h);
    h++;
} 
while (h<=10);

//break
// 1 to 100 
//print hi when you see the multiplication of 5 and break 

console.log("----------")


let number = 0;
while(number <=100){
    console.log(number);
    if(number % 5 ==0){
        console.log("hi there");
        break;
    }
    number++;
}

console.log("----------")
 const br = ["chrome" , "edge", "ff", "opera"];
 for (const e of br){
    //console.log(e);
    if(e=="chrome"){
        console.log("launch chrome");
        break;
    }
 }

