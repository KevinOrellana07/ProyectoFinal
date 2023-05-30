let display = document.getElementById('display');
let equation = '';

function addToDisplay(value){
    equation += value;
    display.value = equation;
}

function clearDisplay(){
    equation = '';
    display.value = '';
}

function calculate(){
    if (equation.includes('√')) {
        let number = equation.substring(equation.indexOf('√') + 1);
        let result = Math.sqrt(parseFloat(number));
        equation = equation.replace('√' + number, result);
    }
    
    let result = eval(equation);
    equation = result.toString();
    display.value = equation;
}
