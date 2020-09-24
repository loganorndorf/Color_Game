


let difficulty = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let mainHeading = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");

let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? difficulty = 3: difficulty = 6;
    
            reset();
        });
    }
}

function setupSquares() {
    // mode button event listeners
    for(let i = 0; i < squares.length; i++) {

        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grab color of clicked square
            const clickedCol = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedCol === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedCol);
                resetBtn.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(difficulty);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    mainHeading.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colors";

    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        

    }
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");

//     difficulty = 3;
//     colors = generateRandomColors(difficulty);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(let i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");

//     difficulty = 6;
//     colors = generateRandomColors(difficulty);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(let i = 0; i < squares.length; i++) {
        
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
        
//     }
// });

// add event listeners
resetBtn.addEventListener("click", function() {
    reset();
})


// helper functions
function changeColors(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }

    mainHeading.style.backgroundColor = color;
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let number = [];
    for(let j = 0; j < 3; j++) {
        
        number.push(Math.floor(Math.random() * 256));
    }
    return "rgb("+number[0]+", "+number[1]+", "+number[2]+")";
}


