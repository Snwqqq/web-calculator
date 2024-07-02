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
    num1Container='0';
    num2Container='';
    calcScreen.textContent = 0;
    state=STATEONE;
}
function addOrRemoveMinusSign(numContainer){
    if(!numContainer.includes('-')){
        numContainer='-'+numContainer;
        return numContainer;
      }
      else
      {
        numContainer = numContainer.slice(1);
}
return numContainer;
      }
    

function hadleNumberButtonPress(numContainer,str){
    if(numContainer!=='0'&&numContainer!=='-0'){
        numContainer+=str;
        }
        else{
        numContainer=str;
        }
        calcScreen.textContent=numContainer;

        return numContainer;
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
            num1Container='0';
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
                    num1Container = hadleNumberButtonPress(num1Container,target.id);
                    break;
                case '.':
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
                num1Container = addOrRemoveMinusSign(num1Container);
                calcScreen.textContent = num1Container;
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
                    num1Container = hadleNumberButtonPress(num1Container,target.id);
                break;
                case '.':
                    if(!num1Container.includes('.')){
                    num1Container+=target.id;
                    calcScreen.textContent=num1Container;
                    }
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
                    num1Container = addOrRemoveMinusSign(num1Container);
                    calcScreen.textContent = num1Container;
                    break;
                case 'AC':
                AC();
                    break;
            } 
            if(action){
            num1=parseFloat(num1Container);
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
                       num2Container = hadleNumberButtonPress(num2Container,target.id);
                    break;
                    case '.':
                        if(!num2.num1Container.includes('.')){
                            num2Container+=target.id;
                            calcScreen.textContent=num2Container;
                        }
                    break;
                    case '+':
                        num2=parseFloat(num2Container);
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
                        num1=answer;
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined; 
                        action=ADD;
                        state=STATETREE;
                        break;
                    case '-':
                        num2=parseFloat(num2Container);
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
                        num1=answer;
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined;
                        action=SUBSTRACT;
                        state=STATETREE;
                        break;
                    case '/':
                        num2=parseFloat(num2Container);
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
                        num1=answer;
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined;
                        action=DIVIDE;
                        state=STATETREE;
                        break;
                    case '*':
                        num2=parseFloat(num2Container);
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
                        num1=answer;
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined;
                        action=MULTIPLY;
                        state=STATETREE;
                        break;
                    case '=':
                        num2=parseFloat(num2Container);
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
                        num2Container = addOrRemoveMinusSign(num2Container);
                        calcScreen.textContent = num2Container; 
                        break;
                    case 'AC':
                        AC();
                        break;
                }
            break;
            case STATEFIVE:
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
                            num1Container = hadleNumberButtonPress(num1Container,target.id);
                            action=undefined;
                            state=STATETWO;
                        break;
                    case '.':
                        if(!num1Container.includes('.')){
                            num1Container+=target.id;
                        }
                            calcScreen.textContent=num1Container;
                            state=STATETWO;
                    break;
                    case '+':
                        num1=answer;
                        num1Container=num1.toString();
                        action=ADD;
                        state=STATETREE;
                        break;
                    case '-':
                        num1=answer;
                        num1Container=num1.toString();
                        action=SUBSTRACT;
                        state=STATETREE;
                        break;
                    case '=':
                        num1=answer;
                        num1Container=num1.toString();
                        action=undefined;
                        state=STATETWO;
                        break;
                    case '/':
                        num1=answer;
                        num1Container=num1.toString();
                        action=DIVIDE;
                        state=STATETREE;
                        break;
                    case '*':
                        num1=answer;
                        num1Container=num1.toString();
                        action=MULTIPLY;
                        state=STATETREE;
                        break;
                    case '+/-':
                        answer*=-1;
                        num1=answer;
                        num1Container=num1.toString();
                        action=undefined;
                        state=STATETWO;

                        break;
                    case 'AC':
                        AC();
                        break;
                }
                num2Container='';
                calcScreen.textContent = num1Container;      
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