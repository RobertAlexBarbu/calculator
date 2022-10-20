
function clickNumber(e) {
    console.log(display1.textContent);
    if(display1.textContent !== '0' && display1.textContent.length < 19 ) {
        display1.textContent = display1.textContent 
        + e.target.textContent;
    }
    else if (display1.textContent.length < 19 ){
        display1.textContent = e.target.textContent;
    }
    else {
        display1.textContent = "ERROR";
    }
}
function clickPoint(e) {
    if(floatingPoint === false) {
        floatingPoint = true;
        display1.textContent = display1.textContent
        + e.target.textContent;
    }
}
function clickDelete() {
    display1.textContent = display1.textContent.slice(0, -1);
}
function clickOperator(e) {
    floatingPoint = false;
    switch(prevClick) {
        case '':
            display2.textContent = display1.textContent + " " 
            + e.target.textContent;
            break;
        case '+':
            display2.textContent = +(display2.textContent.slice(0, -2))
            + +display1.textContent + " " + e.target.textContent;
            break;
        case '-':
            display2.textContent = +(display2.textContent.slice(0, -2))
            - +display1.textContent + " " + e.target.textContent;;
            break;
        case '*':
            display2.textContent = +(display2.textContent.slice(0, -2))
            * +display1.textContent + " " + e.target.textContent;;
            break;
        case '%':
            display2.textContent = +(display2.textContent.slice(0, -2))
            / +display1.textContent + " " + e.target.textContent;;
            break;
    }
    prevClick = e.target.textContent;
    display1.textContent = '0';
}
function clickEqual() {
    floatingPoint = false;
    switch(prevClick) {
        case '+':
            display1.textContent = +(display2.textContent.slice(0, -2))
            + +display1.textContent;
            break;
        case '-':
            display1.textContent = +(display2.textContent.slice(0, -2))
            - +display1.textContent;
            break;
        case '*':
            display1.textContent = +(display2.textContent.slice(0, -2))
            * +display1.textContent;
            break;
        case '%':
            display1.textContent = +(display2.textContent.slice(0, -2))
            / +display1.textContent;
            break;
    }
    display2.textContent = '';
    prevClick = '';
}
function clickClear() {
    display2.textContent = '';
    display1.textContent = '';
    prevClick = '';
    floatingPoint = false;
}

let error = false;
let floatingPoint = false;
let prevClick = '';
const buttons = document.querySelectorAll('button');
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');


buttons.forEach((element) => {
    if(Number.isInteger(+element.textContent) == true ) {
        element.addEventListener('click', clickNumber);
    }
    if(element.textContent === '.') {
        element.addEventListener('click', clickPoint);
    }
    if(element.textContent === 'Delete') {
        element.addEventListener('click', clickDelete);
    }
    if(element.textContent === '+' 
    || element.textContent === '-'
    || element.textContent === '*'
    || element.textContent === '%') {
        element.addEventListener('click', clickOperator);
    }
    if(element.textContent ==='=') {
        element.addEventListener('click', clickEqual);
    }
    if(element.textContent ==='Clear') {
        element.addEventListener('click', clickClear);
    }

});
