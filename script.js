const buttons = document.querySelectorAll('button');
function clickNumber(e) {
    console.log(display1.textContent);
    display1.textContent = display1.textContent 
    + e.target.textContent;
}
function clickPoint(e) {
    if(floatingPoint === false) {
        floatingPoint = true;
        display1.textContent = display1.textContent
        + e.target.textContent;
    }
}

let floatingPoint = false;
buttons.forEach((element) => {
    if(Number.isInteger(+element.textContent) == true ) {
        element.addEventListener('click', clickNumber);
    }
    if(element.textContent === '.') {
        element.addEventListener('click', clickPoint);
    }
});

const display1 = document.querySelector('.display1');