let counter = 0
let S = 0
let M = 1
let z

// Numbers
var calcInput = document.querySelector("#calc-input")
var calcOne = document.querySelector("#calcOne")
var calcTwo = document.querySelector("#calcTwo")
var calcThree = document.querySelector("#calcThree")
var calcFour = document.querySelector("#calcFour")
var calcFive = document.querySelector("#calcFive")
var calcSix = document.querySelector("#calcSix")
var calcSeven = document.querySelector("#calcSeven")
var calcEight = document.querySelector("#calcEight")
var calcNine = document.querySelector("#calcNine")
var calcTen = document.querySelector("#calcTen")

var calcClear = document.querySelector("#calcClear")
var calcComma = document.querySelector("#calcComma")


// Methods
var calcAdd = document.querySelector("#calcAdd")
var calcSubtract = document.querySelector("#calcSubtract")
var calcMultiplicate = document.querySelector("#calcMultiplicate")
var calcDivide = document.querySelector("#calcDivide")

// Mind
var calcMind = document.querySelector("#calc-mind")

// Render to input
function display(value) {
    calcInput.value += value;

    let x = calcInput.value.split("")

    for (let i = 0; i < x.length; i++) {
        if (x[i] == ".") {
            calcComma.disabled = true;
        }
    }

    if (x[1] == 0 && x[0] == 0) {
        calcInput.value = "0.0"
    }

    calcClear.addEventListener("click", (evt) => {
        calcComma.disabled = false
    })

    if (x.indexOf(".") == 0) {
        calcInput.value = "0."
    }
}


// Every number button click rendering
calcOne.addEventListener("click", (evt) => {
    display(1)
})
calcTwo.addEventListener("click", (evt) => {
    display(2)
})
calcThree.addEventListener("click", (evt) => {
    display(3)
})
calcFour.addEventListener("click", (evt) => {
    display(4)
})
calcFive.addEventListener("click", (evt) => {
    display(5)
})
calcSix.addEventListener("click", (evt) => {
    display(6)
})
calcSeven.addEventListener("click", (evt) => {
    display(7)
})
calcEight.addEventListener("click", (evt) => {
    display(8)
})
calcNine.addEventListener("click", (evt) => {
    display(9)
})
calcZero.addEventListener("click", (evt) => {
    display(0)
})
calcComma.addEventListener("click", (evt) => {
    display(",")
})
calcClear.addEventListener("click", (evt) => {
    calcInput.value = ""
    S = 0
    calcMind.textContent = ""
})

// Every method button click rendering

var x

var addFunc = function () {
    if (calcInput.value != "") {
        x = calcInput.value
        console.log(x);
        calcInput.value = null
        S = S + Number(x)
        calcMind.textContent = S
        z = "+"
    }
}

var subFunc = function () {
    if (calcInput.value != "") {
        if (S == 0) {
            x = calcInput.value
            calcInput.value = null
            S = Number(x)
            calcMind.textContent = S
            z = "-"
        }

        else {
            x = calcInput.value
            calcInput.value = null
            S = S - Number(x)
            calcMind.textContent = S
            z = "-"
        }
    }
}

var mulFunc = function () {
    if (calcInput.value != "") {

        if (S == 0) {
            x = calcInput.value
            calcInput.value = null
            S = M * Number(x)
            calcMind.textContent = S
            z = "*"
        }

        else {
            x = calcInput.value
            calcInput.value = null
            S = S * Number(x)
            calcMind.textContent = S
            z = "*"
        }
    }
}

var divFunc = function () {
    if (calcInput.value != "") {

        if (S == 0) {
            x = calcInput.value
            calcInput.value = null
            S = Number(x)
            calcMind.textContent = S
            z = "/"
        }

        else {
            x = calcInput.value
            calcInput.value = null
            S = S / Number(x)
            calcMind.textContent = S
            z = "/"
        }
    }
}

calcAdd.addEventListener("click", (evt) => {
    addFunc()
})

calcSubtract.addEventListener("click", (evt) => {
    subFunc()
})
calcMultiplicate.addEventListener("click", (evt) => {
    mulFunc()
})
calcDivide.addEventListener("click", (evt) => {
    divFunc()
})

addEventListener("keydown", (e) => {

    if (e.key == "1") {
        display(1)
    }

    else if (e.key == "2") {
        display(2)
    }

    else if (e.key == "3") {
        display(3)
    }

    else if (e.key == "4") {
        display(4)
    }

    else if (e.key == "5") {
        display(5)
    }

    else if (e.key == "6") {
        display(6)
    }

    else if (e.key == "7") {
        display(7)
    }

    else if (e.key == "8") {
        display(8)
    }

    else if (e.key == "9") {
        display(9)
    }

    else if (e.key == "0") {
        display(0)
    }

    else if (e.key == "-") {
        subFunc()
        calcSubtract.focus()
    }

    else if (e.key == "+") {
        addFunc()
        calcAdd.focus()
    }

    else if (e.key == "*") {
        mulFunc()
        calcMultiplicate.focus()
    }

    else if (e.key == "/") {
        divFunc()
        calcDivide.focus()
    }

    else if (e.key == "Enter") {
        if (z == "+") {
            addFunc()
        }

        else if (z == "-") {
            subFunc()
        }

        else if (z == "*") {
            mulFunc()
        }

        else if (z == "/") {
            divFunc()
        }
    }
})