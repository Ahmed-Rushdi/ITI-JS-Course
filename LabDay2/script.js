// ========================================
// D1 Task 3:
// ----------
function evaluateExpression() {
    var expr = prompt("Enter your expression:");
    alert("you entered " + expr + " and the result is " + eval(expr))
}
// ========================================
// D1 Task 4:
// ----------
function countA() {
    var str = prompt("Enter your string:");
    var count = 0
    for (const char of str) {
        if (char == 'A') {
            count++
        }
    }
    console.log(count)
}
// ========================================
// D2 Task 1:
// ----------
tips = new Array(
    "Tip 1", "Tip 2", "Tip 3", "Tip 4", "Tip 5",
    "Tip 6", "Tip 7", "Tip 8", "Tip 9", "Tip 10"
)
tipOfTheDayIndex = Math.floor(Math.random() * 10)
alert(tips[tipOfTheDayIndex])
// ========================================
// D2 Task 2:
// ----------
function displayDateTime() {
    var dateTime = new Date()
    document.getElementById("date").innerText = dateTime.toLocaleString()
}
// ========================================
// D2 Task 3:
// ----------
// try {
// alrt("this is an error")
// } catch (error) {
// console.log("caught error: "+error)
// } finally {
// console.log("D2T3 Terminated")
// }
// ========================================
// D2 Task 4:
// ----------
function promptDate() {
    var dateString = prompt("Enter Date in the following format DD-MM-YYYY")
    if (dateString[2] != '-' || dateString[5] != '-' || dateString.length != 10) {
        alert("Wrong Date Format!")
        return;
    }
    var dateComponents = dateString.split('-') // [DD, MM, YYYY]
    var date = new Date(dateComponents[2], dateComponents[1]-1, dateComponents[0])
    alert(date.toDateString())
}
// ========================================
// D2 Task 5:
// ----------
function numOcurences(array, num) {
    var count = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] == num){
            count ++
        }
    }
    return count;
}
// numOcurences(new Array(0,1,2,3,2,6,4,2,1,1,5,4,1,2,0), 1)
// ========================================
// D2 Task 6:
// ----------
function removeElement(array, char) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] == char){
            array.splice(i,1)
            i--
        }
    }
    console.log(array)
}
// removeElement(new Array(0,1,2,3,2,6,4,2,1,1,5,4,1,2,0), 1)
// ========================================
// D2 Task 7:
// ----------
function getMaxElement(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max){
            max = array[i]
        }
    }
    console.log(max)
}
// getMaxElement(new Array(0,1,2,3,2,6,4,2,1,1,5,4,1,2,0,61))