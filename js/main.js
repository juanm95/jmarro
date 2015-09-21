var submitButton = document.getElementById("calculate");
var form = document.getElementById("calculator");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var answer = document.getElementById("answer")
submitButton.onclick(calculate);
function calculate() {
    answer.innerHTML = num1.value + num2.value
}
