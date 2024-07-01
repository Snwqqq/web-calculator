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
function AC(){
    num1=undefined;
    num2=undefined
    answer=undefined;
    action=undefined;
    num1Container='';
    num2Container='';
    calcScreen.textContent = 0;
    state=STATEONE;
}
// state 1(select firs num): 
// - pressed butt changes fist number
// - action buttons inop
// - = button inop
const STATEONE = 1;
// state 2(select action or change first num):
// - pressed butt changes first number
// - action buttons change action
// - = but inop
const STATETWO = 2;
// state 3(select second num)
// - pressed button changes second number
// - action button changes action
// - = but inop
const STATETREE = 3;
// state 4(second but selected)
// - pressed butt change second num
// - action button gives answer and num1=answer action=selectedAction and go to state 3
// - = gives answer
const STATEFOUR = 4;
// state 5(answer)
// - pressed butt changes first number and go state 1
// - action butt changes first num to answer and selects action go to state 3
// - = inop
const STATEFIVE = 5;



const ADD = 1;
const SUBSTRACT = 2;
const MULTIPLY = 3;
const DIVIDE = 4;

const buttonHolder = document.querySelector('.button-holder');
const calcScreen = document.querySelector('.calc-screen');


let num1;
let num1Container='';
let num2;
let num2Container='';
let answer;
let action;
let state = STATEONE;




buttonHolder.addEventListener('click',(event)=>{
    let target = event.target;
    switch (state){
        case STATEONE:
            switch(target.id){
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '0':
                    num1Container+=target.id;
                    calcScreen.textContent=num1Container;
                    break;
                case '+':
                    break;
                case '-':
                    break;
                case '=':
                    break;
                case '/':
                    break;
                case '*':
                    break;
                case '+/-':
                    break;
                case 'AC':
                    AC();
                    break;
            }
            if(num1Container){
            state= STATETWO;
            calcScreen.textContent = num1Container;      
            }
        break;
        case STATETWO:
            switch(target.id){
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '0':
                    num1Container+=target.id;
                    calcScreen.textContent=num1Container;
                    break;
                case '+':
                    action= ADD;
                    break;
                case '-':
                    action=SUBSTRACT;
                    break;
                case '=':
                    break;
                case '/':
                    action=DIVIDE;
                    break;
                case '*':
                    action=MULTIPLY;
                    break;
                case '+/-':
                    num1*=-1;
                    break;
                case 'AC':
                AC();
                    break;
            } 
            if(action){
            num1=parseInt(num1Container);
            state=STATETREE;
            }
        break;
        case STATETREE:
                switch(target.id){
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '0':
                            num2Container+=target.id;
                            calcScreen.textContent=num2Container;
                    break;
                    case '+':
                        action= ADD;
                        break;
                    case '-':
                        action=SUBSTRACT;
                        break;
                    case '=':
                        break;
                    case '/':
                        action=DIVIDE;
                        break;
                    case '*':
                        action=MULTIPLY;
                        break;
                    case '+/-':
                        num1*=-1;
                        calcScreen.textContent = num1;   
                        break;
                    case 'AC':
                        AC();
                        break;
                }
                if(num2Container){
                calcScreen.textContent = num2Container;
                state=STATEFOUR;
                }
            break;
            case STATEFOUR:
                switch(target.id){
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '0':
                            num2Container+=target.id;
                            calcScreen.textContent=num2Container;
                    break;
                    case '+':
                        switch (action){
                            case ADD:
                                num1=add(num1,num2);
                            break;
                            case SUBSTRACT:
                                num1=substract(num1,num2);
                            break;
                            case MULTIPLY:
                                num1=multiply(num1,num2);
                            break;
                            case DIVIDE:
                                num1=divide(num1,num2);
                            break;
                        }
                        calcScreen.textContent = num1;
                        num2=undefined; 
                        action=ADD;
                        state=STATETREE;
                        break;
                    case '-':
                        switch (action){
                            case ADD:
                                num1=add(num1,num2);
                            break;
                            case SUBSTRACT:
                                num1=substract(num1,num2);
                            break;
                            case MULTIPLY:
                                num1=multiply(num1,num2);
                            break;
                            case DIVIDE:
                                num1=divide(num1,num2);
                            break;
                        }
                        calcScreen.textContent = num1;
                        num2=undefined;
                        action=SUBSTRACT;
                        state=STATETREE;
                        break;
                    case '/':
                        switch (action){
                            case ADD:
                                num1=add(num1,num2);
                            break;
                            case SUBSTRACT:
                                num1=substract(num1,num2);
                            break;
                            case MULTIPLY:
                                num1=multiply(num1,num2);
                            break;
                            case DIVIDE:
                                num1=divide(num1,num2);
                            break;
                        }
                        calcScreen.textContent = num1;
                        num2=undefined;
                        action=DIVIDE;
                        state=STATETREE;
                        break;
                    case '*':
                        switch (action){
                            case ADD:
                                num1=add(num1,num2);
                            break;
                            case SUBSTRACT:
                                num1=substract(num1,num2);
                            break;
                            case MULTIPLY:
                                num1=multiply(num1,num2);
                            break;
                            case DIVIDE:
                                num1=divide(num1,num2);
                            break;
                        }
                        calcScreen.textContent = num1;
                        num2=undefined;
                        action=MULTIPLY;
                        state=STATETREE;
                        break;
                    case '=':
                        switch (action){
                            case ADD:
                                answer=add(num1,num2);
                            break;
                            case SUBSTRACT:
                                answer=substract(num1,num2);
                            break;
                            case MULTIPLY:
                                answer=multiply(num1,num2);
                            break;
                            case DIVIDE:
                                answer=divide(num1,num2);
                            break;
                        }
                        calcScreen.textContent = answer;
                        state=STATEFIVE;
                        break;
                    case '+/-':
                        num2*=-1;
                        calcScreen.textContent = num2;   
                        break;
                    case 'AC':
                        AC();
                        break;
                }
            break;
            case STATEFIVE:
                switch(target.id){
                    case '1':
                        num1=1;
                        state= STATETWO;
                        break;
                    case '2':
                        num1=2;
                        state= STATETWO;
                        break;
                    case '3':
                        num1=3;
                        state= STATETWO;
                        break;
                    case '4':
                        num1=4;
                        state= STATETWO;
                        break;
                    case '5':
                        num1=5;
                        state= STATETWO;
                        break;
                    case '6':
                        num1=6;
                        state= STATETWO;
                        break;
                    case '7':
                        num1=7;
                        state= STATETWO;
                        break;
                    case '8':
                        num1=8;
                        state= STATETWO;
                        break;
                    case '9':
                        num1=9;
                        state= STATETWO;
                        break;
                    case '0':
                        num1=0;
                        state= STATETWO;
                        break;
                    case '+':
                        num1=answer;
                        action=ADD;
                        state=STATETREE;
                        break;
                    case '-':
                        num1=answer;
                        action=SUBSTRACT;
                        state=STATETREE;
                        break;
                    case '=':
                        break;
                    case '/':
                        num1=answer;
                        action=DIVIDE;
                        state=STATETREE;
                        break;
                    case '*':
                        num1=answer;
                        action=MULTIPLY;
                        state=STATETREE;
                        break;
                    case '+/-':
                        answer*=-1;
                        calcScreen.textContent=answer;
                        break;
                    case 'AC':
                        AC();
                        break;
                }
                calcScreen.textContent = num1;      
            break;
    }

});

//you press first number it getStored in num1
//if you press another number num1 get changed
//if you press action button then next button you will press will rewrite num2
//if you press another button num2 gets revritten
//if you press = calc will show you answer
//if you press another action butt answer become num2 action change to selected action and then
/*  
so i have 4 states 





*/