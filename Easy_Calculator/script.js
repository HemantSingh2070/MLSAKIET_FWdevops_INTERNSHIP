document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const operatorDisplay = document.getElementById('operator');
    const buttons = document.querySelectorAll('.buttons button');
    let currentValue = '';
    let storedValue = '';
    let currentOperator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number')) {
                currentValue += value;
                display.value = currentValue;
            } else if (button.classList.contains('operator')) {
                if (currentValue !== '') {
                    if (storedValue !== '') {
                        calculate();
                    } else {
                        storedValue = currentValue;
                    }
                    currentValue = '';
                }
                currentOperator = value;
                operatorDisplay.value = currentOperator;
            } else if (button.classList.contains('equals')) {
                calculate();
            } else if (button.classList.contains('clear')) {
                clear();
            } else if (button.classList.contains('decimal')) {
                if (!currentValue.includes('.')) {
                    currentValue += value;
                    display.value = currentValue;
                }
            }
        });
    });

    function calculate() {
        if (currentValue !== '' && storedValue !== '' && currentOperator !== '') {
            const num1 = parseFloat(storedValue);
            const num2 = parseFloat(currentValue);
            let result;

            switch (currentOperator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
            }

            display.value = result;
            storedValue = result.toString();
            currentValue = '';
            currentOperator = '';
            operatorDisplay.value = '';
        }
    }

    function clear() {
        currentValue = '';
        storedValue = '';
        currentOperator = '';
        display.value = '';
        operatorDisplay.value = '';
    }
});
