// Task 1:
// ----------
alert("Welcome to my website!");
var name = prompt("Enter your name:");
alert("Welcome "+name);
// ========================================
// Task 2:
// ----------
function getNumsDisplayResult() {
    var result = sum(prompt('num1'), prompt('num1'));
    console.log(result);
}
function sum(num1, num2) {
    return +num1 + +num2;
}
// ========================================
// Task 5:
// ----------
function findWordInString() {
    var str = prompt("Enter a string:");
    var word = prompt("Enter a word:");
    var pos = str.indexOf(word);
    if (pos == -1) {
        alert(`Not found.`);
    } else {
        alert('position: '+ pos);
    }
}
// ========================================
// Task 6:
// ----------
function convertC(){
    var c = parseFloat(prompt("Enter celsius:"))
    var f = celsiusToFahrenheit(c)
    alert(f+" Fahrenheit")
}
function celsiusToFahrenheit(c){
    var f = c*9/5 + 32
    return f
}