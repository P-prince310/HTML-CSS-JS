let display = document.getElementById('display');

function calculate(event) {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += event.target.textContent;
        }
    }
}

function clearDisplay() {
    display.value = '';
}// JavaScript source code
