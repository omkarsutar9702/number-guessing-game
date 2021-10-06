let computerguess;
let userguesses = [];
let maxguesses;
let attempts = 0;
let low =1;
let high =100;

function range(){
    const rangeoutput = document.getElementById("rangeoutput")
    rangeoutput.innerText = `${low} - ${high}`;
    rangeoutput.classList.add("flash")

    const lowvalue = document.getElementById("low")
    lowvalue.style.flex = low + "%";
    lowvalue.style.background = "#ef7b54";
    const space = document.getElementById("space")
    space.style.flex = high - low + "%";
    space.style.background = "rgb(104, 226, 79)";
    const highvalue = document.getElementById("high")
    highvalue.style.flex =100 - high + "%";
    highvalue.style.background = "#ef7b54";
}

function init(){
    computerguess = Math.floor(Math.random() * 100 + 1);
    console.log(computerguess);
    document.getElementById("newgame").style.display = "none";
    document.getElementById("gamearea").style.display = "none";
}

function startGame(){
    document.getElementById("welcomescreen").style.display = "none";
    document.getElementById("gamearea").style.display = "block";
}

function easymode(){
    maxguesses=10;
    startGame();
}

function hardmode(){
    maxguesses=5;
    startGame();
}

function compareguess(){
    const userguess = Number(document.getElementById("inputbox").value)
    userguesses.push(" " + userguess)
    document.getElementById("guesses").innerHTML = userguesses;
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if(attempts < maxguesses){
        if(userguess > computerguess){
           if(userguess < high) high = userguess;
            document.getElementById("textoutput").innerHTML = "your guess is too High";
            document.getElementById("inputbox").value = "";
    
        } else if (userguess < computerguess){
            if(userguess > low) low = userguess;
            document.getElementById("textoutput").innerHTML = "your guess is too Low";
            document.getElementById("inputbox").value = "";
            
        } else {
            document.getElementById("textoutput").innerHTML = "your guess is Correct!!! you got in " + attempts +" attempts";
            gameend();
        }
    }
    else {
        if(userguess > computerguess){
            document.getElementById("textoutput").innerHTML = "YOU LOSE,<br> The Number Was "+computerguess;
            gameend();
    
        } else if (userguess < computerguess){
            document.getElementById("textoutput").innerHTML = "YOU LOSE,<br> The Number Was "+computerguess;
            gameend();
            
        } else {
            document.getElementById("textoutput").innerHTML = "your guess is Correct!!! you got in " + attempts +" attempts";
            gameend();
        }
        
    }
    range();
}

function gameend(){
    document.getElementById("newgame").style.display = "inline";
    document.getElementById("inputbox").setAttribute("readonly", "readonly")
}

function newgame(){
    window.location.reload();
}