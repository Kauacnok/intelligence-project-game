var button = window.document.getElementById('colorButton')
var link = window.document.getElementById('link')
var ask = window.document.getElementById('ask')
var pontuation = window.document.getElementById('pcenter') 
var imgToExercise = window.document.getElementById('imgContent')
var options = window.document.getElementsByClassName('options')
var imgCorrectOrWrong = window.document.getElementsByClassName('imgCorrectOrWrong')

button.style.backgroundColor = '#6A6180'
button.style.borderColor = '#6A6180'

let asks = [
    {
        ask: `⠀⠀⠀⠀⠀⠀⠀H₃C ─ CH ─ CH ─ CH₂ ─ CH₃<br>⠀⠀⠀│⠀⠀│<br>CH₃ ─ CH₂⠀CH₃`,
        answerCorrect: "3,4-dimetil-hexano",
        answerWrong1: "3,4-dimetil-heptano",
        answerWrong2: "3-metil-2-etil-pentano",
        answerWrong3: "3-metil-2-etil-hexano",
    },
    {
        ask: "C₃H ─ CH₂ ─ CH₂ ─ CH₂ ─ CH₂ ─ CH₂ ─ CH₃",
        answerCorrect: "Heptano",
        answerWrong1: "Hexano",
        answerWrong2: "Hepteno",
        answerWrong3: "Hexino",
    },
    {
        ask: "HC ≡ C ─ CH₂ ─ CH₃",
        answerCorrect: "1-butino",
        answerWrong1: "4-propino",
        answerWrong2: "1-propeno",
        answerWrong3: "1-butano",
    },
    {
        ask: "CH₃<br>│<br>⠀HC ≡ C ─ CH ─ CH₂ ─ CH₃",
        answerCorrect: "3-metil-pent-1-ino",
        answerWrong1: "3-metil-but-1-ino",
        answerWrong2: "3-metil-pent-1-ano",
        answerWrong3: "3-metil-but-1-ano",
    },
    {
        ask: "CH3⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>│⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>H₃C ─ CH ─ CH₂ ─ CH₂ ─ CH₂ ─ CH₂ ─ CH₂ ─ CH₃",
        answerCorrect: "2-metil-octano",
        answerWrong1: "8-metil-etano",
        answerWrong2: "2-metil-heptano",
        answerWrong3: "6-metil-octano",
    },
    {
        ask: "CH₃⠀⠀⠀⠀⠀⠀CH₃⠀⠀<br>│⠀⠀⠀⠀⠀⠀⠀⠀│⠀⠀<br>H₂C = C ─ CH = CH ─ CH ─ CH₃⠀",
        answerCorrect: "2,5-dimetil-hexa-1,3-dieno",
        answerWrong1: "1,3-dimetil-hexa-2,5-dieno",
        answerWrong2: "1,5-dimetil-hexa-2,3-dieno",
        answerWrong3: "2,3-dimetil-hexa-1,5-dieno",
    },
    {
        ask: "H₃C ─ CH₂ ─ C ≡ C ─ CH₂ ─ CH₃",
        answerCorrect: "3-hexino",
        answerWrong1: "3-hexano",
        answerWrong2: "3-hexeno",
        answerWrong3: "3-hexanol",
    },
    {
        ask: "H₂C = HC ─ HC = HC ─ CH₂ ─ CH₃",
        answerCorrect: "Hexa-1,3-dieno",
        answerWrong1: "Hexa-1,3-diano",
        answerWrong2: "Hexa-1,3-dino",
        answerWrong3: "Hexa-1,3-dianol",
    },
    {
        ask: "H₃C ─ CH ─ CH₃<br>│<br>OH",
        answerCorrect: "Propan-2-ol",
        answerWrong1: "Propan-2-o",
        answerWrong2: "Propen-2-ol",
        answerWrong3: "Propan-2-dieno",
    },
    {
        ask: "⠀⠀⠀CH₂ ─ CH ─ OH<br>│⠀⠀⠀│<br>CH₂ ─ CH₂",
        answerCorrect: "Ciclobutanol",
        answerWrong1: "Propan-2-ol",
        answerWrong2: "Ciclopropanol",
        answerWrong3: "Butan-2-ol",
    },
]

let buttons = [
    {
        button: false   
    },
    {
        button: false    
    },
    {
        button: false    
    },
    {
        button: false    
    }
]

button.style.cursor = "default"

ask.innerHTML = `${asks[0].ask}`

let canClick = true
let changeAsk = false

let asksCompleted = 1
let score = 0

pontuation.innerText = `Acertos: ${score}/${asks.length}`

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

function sendingTheOptions(value, randomNumber) {
    canClick = true
    if (randomNumber == 1) {
        buttons[0].button = true
        options[0].value = `${asks[value].answerCorrect}`
        options[1].value = `${asks[value].answerWrong1}`
        options[2].value = `${asks[value].answerWrong2}`
        options[3].value = `${asks[value].answerWrong3}`
        return 0
    }
    if (randomNumber == 2) {
        buttons[1].button = true
        options[0].value = `${asks[value].answerWrong1}`
        options[1].value = `${asks[value].answerCorrect}`
        options[2].value = `${asks[value].answerWrong2}`
        options[3].value = `${asks[value].answerWrong3}`
        return 1
    }
    if (randomNumber == 3) {
        buttons[2].button = true
        options[0].value = `${asks[value].answerWrong1}`
        options[1].value = `${asks[value].answerWrong2}`
        options[2].value = `${asks[value].answerCorrect}`
        options[3].value = `${asks[value].answerWrong3}`
        return 2
    }
    if (randomNumber == 4) {
        buttons[3].button = true
        options[0].value = `${asks[value].answerWrong1}`
        options[1].value = `${asks[value].answerWrong2}`
        options[2].value = `${asks[value].answerWrong3}`
        options[3].value = `${asks[value].answerCorrect}`
        return 3
    }
}

let colect = sendingTheOptions(asksCompleted - 1, getRandom(4))

function verifyAnswer(button) {
    if(canClick) {
        canClick = false
        asksCompleted += 1
        showImages(colect)
        if (buttons[button].button) {
            score += 1
            nextStep()
        } else {
            nextStep()
        }
    }
}

function showImages(buttonIndex) {
    if (buttonIndex == 0) {
        imgCorrectOrWrong[0].src = "../images/success-check-icon.svg"

        for (let index2 = 1; index2 < imgCorrectOrWrong.length; index2++) {
            imgCorrectOrWrong[index2].src ="../images/red-x.svg"
            options[index2].style.borderColor = "#ff7e7e"
        }
        options[0].style.borderColor = '#04D361'
    }
    if (buttonIndex == 1) {
        imgCorrectOrWrong[0].src = "../images/red-x.svg"
        imgCorrectOrWrong[1].src = "../images/success-check-icon.svg"
        imgCorrectOrWrong[2].src = "../images/red-x.svg"
        imgCorrectOrWrong[3].src = "../images/red-x.svg" 

        options[0].style.borderColor = "#ff7e73"
        options[1].style.borderColor = "#04D361"
        options[2].style.borderColor = "#ff7e73"
        options[3].style.borderColor = "#ff7e73"
    }
    if (buttonIndex == 2) {
        imgCorrectOrWrong[0].src = "../images/red-x.svg"
        imgCorrectOrWrong[1].src = "../images/red-x.svg"
        imgCorrectOrWrong[2].src = "../images/success-check-icon.svg"
        imgCorrectOrWrong[3].src = "../images/red-x.svg" 

        options[0].style.borderColor = "#ff7e73"
        options[1].style.borderColor = "#ff7e73"
        options[2].style.borderColor = "#04D361"
        options[3].style.borderColor = "#ff7e73"
    }
    if (buttonIndex == 3) {
        imgCorrectOrWrong[0].src = "../images/red-x.svg"
        imgCorrectOrWrong[1].src = "../images/red-x.svg"
        imgCorrectOrWrong[2].src = "../images/red-x.svg"
        imgCorrectOrWrong[3].src = "../images/success-check-icon.svg" 

        options[0].style.borderColor = "#ff7e73"
        options[1].style.borderColor = "#ff7e73"
        options[2].style.borderColor = "#ff7e73"
        options[3].style.borderColor = "#04D361"
    }
}

function nextStep() {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].button = false
    }
    pontuation.innerText = `Acertos: ${score}/${asks.length}`
    button.style.backgroundColor = "#04D361"
    button.style.borderColor = "#04D361"
    button.style.cursor = "pointer"
    if (asksCompleted > asks.length) {
        button.value = "Ir para o fim"
    }
    changeAsk = true
}

function nextAsk() {
    if (changeAsk) {
        if (asksCompleted > asks.length) {
            link.href = "../views/endGame.html"
        } else {
            button.style.backgroundColor = "#6A6180"
            button.style.borderColor = "#6A6180"
            button.style.cursor = "default"
            ask.innerHTML = `${asks[(asksCompleted - 1)].ask}`
            for (let index4 = 0; index4 < options.length; index4++) {
                imgCorrectOrWrong[index4].src = "#"
                options[index4].style.borderColor = "#8f8f9d"
            }
            colect = sendingTheOptions(asksCompleted - 1, getRandom(4))
        }
    }
}