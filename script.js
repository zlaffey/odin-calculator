console.log("CONNECTED!!!");

const add = (a, b) => {
	return a + b;
};
const subtract = (a, b) => {
	return a - b;
};
const multiply = (a, b) => {
	return a * b;
};
const divide = (a, b) => {
	return a / b;
};

const operate = (op, a, b) => {
	if (op === "+") {
		return add(a, b);
	} else if (op === "-") {
		return subtract(a, b);
	} else if (op === "*") {
		return multiply(a, b);
	} else if (op === "/") {
		return divide(a, b);
	} else {
		return "invalid input";
	}
};

let displayValue = "";
let currentOperator = "";
let val1 = "";
let val2 = "";

const currentDisplay = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num");

const updateDisplay = () => {
	currentDisplay.textContent = displayValue;
};

numButtons.forEach((num) => {
	num.addEventListener("click", () => appendNumber(num.textContent));
});

const appendNumber = (number) => {
	if (currentDisplay.textContent < 100000000) {
		currentDisplay.textContent += number;
		displayValue = currentDisplay.textContent;
	}
};

// Clear Button Functionality//
const clear = () => {
	displayValue = "";
	currentOperator = "";
	val1 = "";
	val2 = "";
	updateDisplay();
};

// Equal Button Functionality//
const equals = () => {
	val2 = Number(displayValue);
	displayValue = operate(currentOperator, val1, val2);
	updateDisplay();
};

const setOperatorDivide = () => {
	val1 = Number(displayValue);
	currentOperator = "/";
	displayValue = "";
	updateDisplay();
	console.log(currentOperator);
};
const setOperatorMultiply = () => {
	val1 = Number(displayValue);
	currentOperator = "*";
	displayValue = "";
	updateDisplay();
	console.log(currentOperator);
};
const setOperatorSubtract = () => {
	val1 = Number(displayValue);
	currentOperator = "-";
	displayValue = "";
	updateDisplay();
	console.log(currentOperator);
};
const setOperatorAdd = () => {
	val1 = Number(displayValue);
	currentOperator = "+";
	displayValue = "";
	updateDisplay();
	console.log(currentOperator);
};

document.querySelector("h1").addEventListener("click", updateDisplay);
document.querySelector("#clear").addEventListener("click", clear);
// document.querySelector("#negative").addEventListener("click", clear);
// document.querySelector("#percent").addEventListener("click", clear);
// document.querySelector("#nine").addEventListener("click", clear);
// document.querySelector("#eight").addEventListener("click", clear);
// document.querySelector("#seven").addEventListener("click", clear);
// document.querySelector("#six").addEventListener("click", clear);
// document.querySelector("#five").addEventListener("click", clear);
// document.querySelector("#four").addEventListener("click", clear);
// document.querySelector("#three").addEventListener("click", clear);
// document.querySelector("#two").addEventListener("click", clear);
// document.querySelector("#one").addEventListener("click", clear);
// document.querySelector("#zero").addEventListener("click", clear);
// document.querySelector("#dot").addEventListener("click", clear);
document.querySelector("#divide").addEventListener("click", setOperatorDivide);
document
	.querySelector("#multiply")
	.addEventListener("click", setOperatorMultiply);
document
	.querySelector("#subtract")
	.addEventListener("click", setOperatorSubtract);
document.querySelector("#add").addEventListener("click", setOperatorAdd);
document.querySelector("#equal").addEventListener("click", equals);
