
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
function clickDelete() {
    display1.textContent = display1.textContent.slice(0, -1);
}


let floatingPoint = false;
const buttons = document.querySelectorAll('button');
const display1 = document.querySelector('.display1');


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

});
