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
// - pressed butt changes first number
// - action butt changes first num to answer and selects action go to state 3
// - = inop
const STATEFIVE = 5;



const ADD = 1;
const SUBSTRACT = 2;
const MULTIPLY = 3;
const DIVIDE = 4;

const buttonHolder = document.querySelector('.button-holder');


let num1;
let num2;
let answer;
let action;
let state = STATEONE;




buttonHolder.addEventListener('click',(event)=>{
    let target = event.target;
    switch (state){
        case STATEONE:
            switch(target.id){
                case '1':
                    num1=1;
                    break;
                case '2':
                    num1=2;
                    break;
                case '3':
                    num1=3;
                    break;
                case '4':
                    num1=4;
                    break;
                case '5':
                    num1=5;
                    break;
                case '6':
                    num1=6;
                    break;
                case '7':
                    num1=7;
                    break;
                case '8':
                    num1=8;
                    break;
                case '9':
                    num1=9;
                    break;
                case '0':
                    num1=0;
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
                    num1=undefined;
                    num2=undefined
                    answer=undefined;
                    state=STATEONE;
                    break;
            }
            if(num1){
            state= STATETWO;
            alert('statetwo');
            }
        break;
        case STATETWO:
            switch(target.id){
                case '1':
                    num1=1;
                    break;
                case '2':
                    num1=2;
                    break;
                case '3':
                    num1=3;
                    break;
                case '4':
                    num1=4;
                    break;
                case '5':
                    num1=5;
                    break;
                case '6':
                    num1=6;
                    break;
                case '7':
                    num1=7;
                    break;
                case '8':
                    num1=8;
                    break;
                case '9':
                    num1=9;
                    break;
                case '0':
                    num1=0;
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
                    break;
                case 'AC':
                    num1=undefined;
                    num2=undefined
                    answer=undefined;
                    action=undefined;
                    state=STATEONE;
                    break;
            }
            if(action){
            state=STATETREE;
            alert('statetree')
            }
        break;
        case STATETREE:
                switch(target.id){
                    case '1':
                        num2=1;
                        break;
                    case '2':
                        num2=2;
                        break;
                    case '3':
                        num2=3;
                        break;
                    case '4':
                        num2=4;
                        break;
                    case '5':
                        num2=5;
                        break;
                    case '6':
                        num2=6;
                        break;
                    case '7':
                        num2=7;
                        break;
                    case '8':
                        num2=8;
                        break;
                    case '9':
                        num2=9;
                        break;
                    case '0':
                        num2=0;
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
                        break;
                    case 'AC':
                        num1=undefined;
                        num2=undefined
                        answer=undefined;
                        action=undefined;
                        state=STATEONE;
                        break;
                }
                if(num2){
                state=STATEFOUR;
                alert('statefour')
                }
            break;
            case STATEFOUR:
                switch(target.id){
                    case '1':
                        num2=1;
                        break;
                    case '2':
                        num2=2;
                        break;
                    case '3':
                        num2=3;
                        break;
                    case '4':
                        num2=4;
                        break;
                    case '5':
                        num2=5;
                        break;
                    case '6':
                        num2=6;
                        break;
                    case '7':
                        num2=7;
                        break;
                    case '8':
                        num2=8;
                        break;
                    case '9':
                        num2=9;
                        break;
                    case '0':
                        num2=0;
                        break;
                    case '+':
                    case '-':
                    case '/':
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
                        alert('stateTHREE');
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
                        alert('stateFIVE');
                        state=STATEFIVE;
                        break;
                    case '+/-':
                        break;
                    case 'AC':
                        num1=undefined;
                        num2=undefined
                        answer=undefined;
                        action=undefined;
                        state=STATEONE;
                        break;
                }
            break;
            case STATEFIVE:
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