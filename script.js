let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let firstValue = '';
let operationHistory = '';

function clearDisplay() {
    currentValue = '';
    operator = '';
    firstValue = '';
    operationHistory = '';
    updateDisplay();
}

function appendValue(value) {
    currentValue += value;
    operationHistory += value;
    updateDisplay();
}

function setOperator(op) {
    if (currentValue !== '') {
        operator = op;
        firstValue = currentValue;
        currentValue = '';
        operationHistory += ` ${op} `;
        updateDisplay();
    }
}

function calculate() {
    if (currentValue !== '' && firstValue !== '' && operator !== '') {
        switch (operator) {
            case '+':
                currentValue = (parseFloat(firstValue) + parseFloat(currentValue)).toString();
                break;
            case '-':
                currentValue = (parseFloat(firstValue) - parseFloat(currentValue)).toString();
                break;
            case '*':
                currentValue = (parseFloat(firstValue) * parseFloat(currentValue)).toString();
                break;
            case '/':
                currentValue = (parseFloat(firstValue) / parseFloat(currentValue)).toString();
                break;
        }
        operationHistory = currentValue;
        operator = '';
        firstValue = '';
        updateDisplay();
    }
}

function calculatePercentage() {
    if (currentValue !== '') {
        currentValue = (parseFloat(currentValue) / 100).toString();
        operationHistory = currentValue;
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = operationHistory;
}
