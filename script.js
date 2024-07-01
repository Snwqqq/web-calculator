function add(num1,num2){
    return num1+num2;
}
function substract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
   return num1/num2;
}

const STAGEONE = 1;
const STAGETWO = 2;
const STAGETREE = 3;
const STAGEFOUE = 4;
const STAGEFIVE = 5;



let num1;
let num2;
let answer;
let stage = STAGEONE;


//you press first number it getStored in num1
//if you press another number num1 get changed
//if you press action button then next button you will press will rewrite num2
//if you press another button num2 gets revritten
//if you press = calc will show you answer
//if you press another action butt answer become num2 action change to selected action and then
/*  
so i have 4 states 
state 1(select firs num): 
- pressed butt changes fist number
- action buttons inop
- = button inop
state 2(select action or change first num):
- pressed butt changes first number
- action buttons change action
- = but inop
stage 3(select second num)
- pressed button changes second number
- action button changes action
- = but inop
stage 4(second but selected)
- pressed butt change second num
- action button gives answer and num1=answer action=selectedAction and go to stage 3
- = gives answer
stage 5(answer)
- pressed butt changes first number
- action butt changes first num to answer and selects action go to stage 3
- = inop
*/