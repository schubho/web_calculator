let display = document.getElementById("display");

function appendCharacter(char) {
    if (display.innerText === "0") {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function popCharacter() {
    let tempArray;
    if (display.innerText !== "0") 
        {
        tempArray = display.innerText.split('')
        tempArray.pop()
        display.innerText = tempArray.join('')
    }
    }


function clearDisplay() {
    display.innerText = "0";
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}