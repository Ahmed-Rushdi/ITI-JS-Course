// ========================================
// Task 1:
// ----------
let gallery = document.getElementById("gallery")
// console.log(gallery.children.length)
for (let img of gallery.children) {
    // console.log(img)
    img.style.opacity = img.style.opacity || "1"
    img.addEventListener("mouseover", function () {
        let fade = setInterval(() => {
            let op = parseFloat(img.style.opacity)
            if (op > 0.3) {
                img.style.opacity = op - 0.01
            } else {
                clearInterval(fade)
            }
        }, 10)
    })

    img.addEventListener("mouseleave", function () {

        let appear = setInterval(() => {
            let op = parseFloat(img.style.opacity)
            if (op < 1) {
                img.style.opacity = op + 0.01
            } else {
                clearInterval(appear)
            }
        }, 10)
    })
}
// ========================================
// Task 2:
// ----------
const colors = ["black", "red", "yellow", "blue", "violet", "gray", "magenta", "green"]
const colorButton = document.getElementById("change-colors-btn")
const colorSpans = document.querySelectorAll(".color-span")
// console.log(colorSpans)
colorButton.addEventListener("click", () => {
    for (span of colorSpans) {
        span.style.color = colors[Math.floor(Math.random() * colors.length)]
    }
})
// ========================================
// Task 3:
// ----------
const pwButton = document.getElementById("toggle-password-btn")
// console.log(pwButton)
pwButton.addEventListener("click", () => {
    passwd = pwButton.previousSibling
    if (pwButton.previousSibling.getAttribute('type') == "password") {
        passwd.setAttribute('type', 'text')
        pwButton.textContent = "Hide"
    } else {
        passwd.setAttribute('type', 'password')
        pwButton.textContent = "Show"
    }
})
// ========================================
// Task 4:
// ----------
const questions = ["Q1:", "Q2:", "Q3:", "Q4:", "Q5:", "Q6:", "Q7:", "Q8:", "Q9:", "Q10:"]
let currQIndex = 0
const prevQBtn = document.querySelector("#prev-q-btn")
const nextQBtn = document.querySelector("#next-q-btn")
prevQBtn.addEventListener("click", () => {
    currQIndex = Math.max(0, currQIndex - 1)
    dispQues(currQIndex)
})
nextQBtn.addEventListener("click", () => {
    currQIndex = Math.min(questions.length - 1, currQIndex + 1)
    dispQues(currQIndex)
})
function dispQues(i) {
    // console.log(`${i} : ${questions[i]}`)
    document.getElementById("curr_question").textContent = questions[i]
}
dispQues(currQIndex)
// ========================================
// Task 5:
// ----------
const pColors = document.getElementById("p-colors").children
window.addEventListener("load", () => {
    // console.log("here")
    for (p of pColors) {
        p.style.color = colors[Math.floor(Math.random() * colors.length)]
    }
})
// ========================================
// Task 6:
// ----------
const regForm = document.getElementById("reg-form")
const nameField = regForm.querySelector("#name")
const nameError = regForm.querySelector("#name-err")
nameError.style.display = "none"
const pwField = regForm.querySelector("#password")
const rpwField = regForm.querySelector("#re-password")
const pwError = regForm.querySelector("#pw-err")
pwError.style.display = "none"
// ----------
nameField.addEventListener("focus", () => {
    nameField.style.border = "solid 1px blue"
})
nameField.addEventListener("blur", () => {
    nameField.style.border = ""
    nameVal = nameField.value.trim()
    if (nameVal.length <= 3) {
        nameError.style.display = "inline"
        nameError.style.color = "red"
        setTimeout(() => {
            nameField.focus()
            nameField.select()
        }, 0)
        nameField.style.backgroundColor = "gray"
    } else {
        nameError.style.display = "none"
        nameField.style.backgroundColor = "white"
    }
})
// ----------
rpwField.addEventListener("blur", () => {

    if (pwField.value != rpwField.value) {
        pwError.style.display = "inline"
        pwError.style.color = "red"

    } else {
        pwError.style.display = "none"
    }
})
// ========================================
// Task 7:
// ----------
regForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nameField.value.length > 3 && (pwField.value == rpwField.value)) {
        console.log("submitted")
        regForm.submit()
    }
})
// ========================================
// Task 9: 
// ----------
const calcDiv = document.createElement("div")
calcDiv.style.display = "grid"
calcDiv.style.gridTemplateColumns = "repeat(4, 1fr)"
calcDiv.style.gridTemplateAreas = `
"title  title   title   title"
"result result  result  equals"
"one    two     three   plus"
"four   five    six     minus"
"seven  eight   nine    mul"
"clear  zero    dot     div"`
calcDiv.style.gap = "2px"
calcDiv.style.width = "200px"
calcDiv.style.height = "350px"
calcDiv.style.padding = "2px"
calcDiv.style.border = "2px solid black"
calcDiv.style.backgroundColor = "#eeeeee"

const titleArea = document.createElement("div")
titleArea.textContent = "JavaScript Calculator"
titleArea.style.gridArea = "title"
titleArea.style.display = "grid"
titleArea.style.justifyContent = "center"
titleArea.style.alignContent = "center"
titleArea.style.backgroundColor = "#aaaaaa"
titleArea.style.color = "white"
calcDiv.appendChild(titleArea)

const resArea = document.createElement("textarea")
resArea.style.gridArea = "result"
resArea.style.textAlign = "right"
calcDiv.appendChild(resArea)

const oneBtn = document.createElement("button")
oneBtn.textContent = "1"
oneBtn.style.gridArea = "one"
calcDiv.appendChild(oneBtn)

const twoBtn = document.createElement("button")
twoBtn.textContent = "2"
twoBtn.style.gridArea = "two"
calcDiv.appendChild(twoBtn)

const threeBtn = document.createElement("button")
threeBtn.textContent = "3"
threeBtn.style.gridArea = "three"
calcDiv.appendChild(threeBtn)

const fourBtn = document.createElement("button")
fourBtn.textContent = "4"
fourBtn.style.gridArea = "four"
calcDiv.appendChild(fourBtn)

const fiveBtn = document.createElement("button")
fiveBtn.textContent = "5"
fiveBtn.style.gridArea = "five"
calcDiv.appendChild(fiveBtn)

const sixBtn = document.createElement("button")
sixBtn.textContent = "6"
sixBtn.style.gridArea = "six"
calcDiv.appendChild(sixBtn)

const sevenBtn = document.createElement("button")
sevenBtn.textContent = "7"
sevenBtn.style.gridArea = "seven"
calcDiv.appendChild(sevenBtn)

const eightBtn = document.createElement("button")
eightBtn.textContent = "8"
eightBtn.style.gridArea = "eight"
calcDiv.appendChild(eightBtn)

const nineBtn = document.createElement("button")
nineBtn.textContent = "9"
nineBtn.style.gridArea = "nine"
calcDiv.appendChild(nineBtn)

const zeroBtn = document.createElement("button")
zeroBtn.textContent = "0"
zeroBtn.style.gridArea = "zero"
calcDiv.appendChild(zeroBtn)

const clearBtn = document.createElement("button")
clearBtn.textContent = "Clear"
clearBtn.style.gridArea = "clear"
calcDiv.appendChild(clearBtn)

const mulBtn = document.createElement("button")
mulBtn.textContent = "*"
mulBtn.style.gridArea = "mul"
calcDiv.appendChild(mulBtn)

const divBtn = document.createElement("button")
divBtn.textContent = "/"
divBtn.style.gridArea = "div"
calcDiv.appendChild(divBtn)

const plusBtn = document.createElement("button")
plusBtn.textContent = "+"
plusBtn.style.gridArea = "plus"
calcDiv.appendChild(plusBtn)

const minusBtn = document.createElement("button")
minusBtn.textContent = "-"
minusBtn.style.gridArea = "minus"
calcDiv.appendChild(minusBtn)

const dotBtn = document.createElement("button")
dotBtn.textContent = "."
dotBtn.style.gridArea = "dot"
calcDiv.appendChild(dotBtn)

const equalsBtn = document.createElement("button")
equalsBtn.textContent = "="
equalsBtn.style.gridArea = "equals"
calcDiv.appendChild(equalsBtn)

let expression = ""

for (let button of calcDiv.querySelectorAll("button")) {
    if(button.textContent == "=" || button.textContent == "Clear"){
        continue
    }
    button.addEventListener('click', ()=>{
        expression = expression + button.textContent
        resArea.textContent = expression
    })
}

equalsBtn.addEventListener("click", () => {
    resArea.textContent = eval(resArea.textContent)
    expression = resArea.textContent
})

clearBtn.addEventListener("click", () => {
    resArea.textContent = ""
    expression = ""
})

document.body.appendChild(calcDiv)


