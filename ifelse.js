function checkAge(age){
if (age>18){
    console.log("you are allowed to vote");
}
else{
    console.log("you are not allowed to vote");
}
}
checkAge(2);
checkAge(22);
// 
function checkNumber(num){
    if (num >0){
        console.log("this is a positive number");
    }
        else if(num<0){
            console.log(" this is a negative number");

        }

            else{
                console.log("this is a zero number");
            
                
            }
        
    }
checkNumber(90);
checkNumber(0);
checkNumber(-9);

// nested if else 
    function checkGrade(score){
        let grade;
        if (score >= 90){
            grade = "A";
        }
        else{
            if(score>= 80){
                grade="b";
            }
            else{
                if (score>=60){
                    grade="c";
                }
                else{
                    grade="d";
                }
            }
        }
        console.log(grade);
    }
    checkGrade(90);
    checkGrade(70);
    checkGrade(33);

// browser 
// these are issues in this code once the first condition is satisfied 
// it will not check the else part 
// then we have to use the switch condition.
// we can not use break in if else 

let browser = "opera";
if (browser == "chrome"){
    console.log("launch chrome");
}
else if (browser == "edge"){
    console.log("launch edge");

}
else if (browser=="firefox"){
    console.log("launch firefox")
}
else{
    console.log("please pass the right browser")
}