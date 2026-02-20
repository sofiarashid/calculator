//what the user is currently typing (as text)
let typedNumberText=''

//the number we store for calculations
let storedNumber = null

// the operator currently selected (plus minus multiply divide)
let currentOperator = ''

//used only for displaying the history line
// ex:"3" "+" "4" "=" "7"
let historyParts = []

// ------------------------------------------------------------------
// HELPER FUNCTIONS
function setStatus(message) {
    document.getElementById('status').textContent = message
}
function showSymbol(op) {
    if (op === '*') return 'x';
    if (op === '/') return '÷';
    if (op === '-') return '&#x2212;'; // Unicode for minus sign
    return op;
}
function updateScreen() {
    const display = document.getElementById('displayLine')
    const history = document.getElementById('historyLine')
    const status = document.getElementById('status')
    display.textContent = typedNumberText
}












function pressNumber(digit) {
    setStatus('')
    if (typedNumberText === '0') {
        typedNumberText = digit;
    } else {
        typedNumberText = typedNumberText + digit
    }
    updateScreen()
}
function pressOperator(operator) {
    console.log(operator)
}