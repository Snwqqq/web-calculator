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
    if(numContainer.length >= 14){
        numContainer = numContainer.slice(1);
        numContainer+=str;
    }
    else{
    if(numContainer!=='0'&&numContainer!=='-0'){
        numContainer+=str;
        }
        else{
        numContainer=str;
        }
    }
    calcScreen.textContent=numContainer;
    return numContainer;
}

function formatAnswer(num) {
    let numStr = num.toString();
  
  if(numStr.length >14){
    numStr = numStr.slice(0,14);
  } 
  
    return numStr;
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
const buttonChangeColor = document.querySelectorAll('.button');


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
                    num1Container = hadleNumberButtonPress(num1Container,target.id);
                break;
                case '.':
                    num1Container = addOrRemoveMinusSign(num1Container);
                    calcScreen.textContent = num1Container;
                    break;
                case '+':
                    action= ADD;
                    buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                    target.classList.add('changeColor');
                    break;
                case '-':
                    action=SUBSTRACT;
                    buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                    target.classList.add('changeColor');
                    break;
                case '=':
                    break;
                case '/':
                    action=DIVIDE;
                    buttonChangeColor.forEach(button=>{
                        if(button!==target){ 
                            button.classList.remove('changeColor');
                        }
                    });
                    target.classList.add('changeColor');
                    break;
                case '*':
                    action=MULTIPLY;
                    target.classList.add('changeColor');
                    buttonChangeColor.forEach(button=>{
                        if(button!==target){ 
                            button.classList.remove('changeColor');
                        }
                    });
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
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        if(num2Container){
                        num2=parseFloat(num2Container);
                        switch (action){
                            case ADD:
                                answer=add(num1,num2);
                                answer=formatAnswer(answer);
                            break;
                            case SUBSTRACT:
                                answer=substract(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case MULTIPLY:
                                answer=multiply(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case DIVIDE:
                                answer=divide(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                        }
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined; 
                        action=ADD;
                        state=STATETREE;
                    }
                    else{
                        action=ADD;
                    }
                        break;
                    case '-':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        if(num2Container){
                        num2=parseFloat(num2Container);
                        switch (action){
                            case ADD:
                                answer=add(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case SUBSTRACT:
                                answer=substract(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case MULTIPLY:
                                answer=multiply(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case DIVIDE:
                                answer=divide(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                        }
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined;
                        action=SUBSTRACT;
                        state=STATETREE;
                    }
                    else{ 
                        action = SUBSTRACT;
                        
                    }
                        break;
                    case '/':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        if(num2Container){
                        num2=parseFloat(num2Container);
                        switch (action){
                            case ADD:
                                answer=add(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case SUBSTRACT:
                                answer=substract(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case MULTIPLY:
                                answer=multiply(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case DIVIDE:
                                answer=divide(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                        }
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined;
                        action=DIVIDE;
                        state=STATETREE;
                    }
                    else{
                        action=DIVIDE;
                    }
                        break;
                    case '*':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        if(num2Container){
                        num2=parseFloat(num2Container);
                        switch (action){
                            case ADD:
                                answer=add(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case SUBSTRACT:
                                answer=substract(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case MULTIPLY:
                                answer=multiply(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case DIVIDE:
                                answer=divide(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                        }
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        num2Container='';
                        calcScreen.textContent = num1Container;
                        num2=undefined;
                        action=MULTIPLY;
                        state=STATETREE;
                    }
                    else{
                        action=MULTIPLY;
                    }
                        break;
                    case '=':
                        if(num2Container){
                        num2=parseFloat(num2Container);
                        switch (action){
                            case ADD:
                                answer=add(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case SUBSTRACT:
                                answer=substract(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case MULTIPLY:
                                answer=multiply(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                            case DIVIDE:
                                answer=divide(num1,num2);
                                answer = formatAnswer(answer);
                            break;
                        }
                        
                        if(num2Container){
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        calcScreen.textContent = answer;
                        state=STATEFIVE;
                        }
                    }
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
                            num1Container='';
                            num1Container = hadleNumberButtonPress(num1Container,target.id);
                            action=undefined;
                            state=STATEONE;
                        break;
                    case '.':
                        if(!num1Container.includes('.')){
                            num1Container+=target.id;
                        }
                            calcScreen.textContent=num1Container;
                            state=STATEONE;
                    break;
                    case '+':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        action=ADD;
                        state=STATETREE;
                        break;
                    case '-':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        action=SUBSTRACT;
                        state=STATETREE;
                        break;
                    case '=':
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        action=undefined;
                        state=STATEONE;
                        break;
                    case '/':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        action=DIVIDE;
                        state=STATETREE;
                        break;
                    case '*':
                        buttonChangeColor.forEach(butt=> butt.classList.remove('changeColor'));
                        target.classList.add('changeColor');
                        num1=parseFloat(answer);
                        num1Container=num1.toString();
                        action=MULTIPLY;
                        state=STATETREE;
                        break;
                    case '+/-':
                        num2Container = addOrRemoveMinusSign(num2Container);
                        calcScreen.textContent = num2Container; 
                        num1=toParse(answer);
                        num1Container=num1.toString();
                        action=undefined;
                        state=STATEONE;

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