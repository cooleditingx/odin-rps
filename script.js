/*let user = prompt("choose your weapon").toLowerCase();
function getCompChoice(){
    let choice = Math.floor(Math.random() *3)
    switch (choice){
        case 0:
            choice = "Scissors";
        break;
        case 1:
            choice = "Paper";
        break;
        case 2: 
            choice = "Rock";
    }
    return choice
}
let compchoice = String(getCompChoice().toLowerCase())
let humanscore = 0;
let computerscore = 0;
const totaltie = 0;
let tie = "It's a tie!";
let userwin = "You win!";
let compwin = "Computer wins";
function playround(){ 
    if (compchoice == "rock" && user == "rock"){
        humanscore = humanscore
        computerscore = computerscore
        let array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice == "rock" && user == "paper") {
        humanscore = humanscore  +1
        computerscore = computerscore
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice == "rock" && user == "scissors"){
        humanscore = humanscore
        computerscore = computerscore +  1
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice ==  "paper" && user == "rock"){
        humanscore = humanscore
        computerscore = computerscore +  1
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice  == "paper" && user == "paper"){
        humanscore = humanscore
        computerscore = computerscore
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice  == "paper" && user == "scissors"){
        humanscore = humanscore  +1
        computerscore = computerscore
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice  == "scissors" && user == "rock"){
        humanscore = humanscore  +1
        computerscore = computerscore
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice == "scissors" && user == "paper"){
        humanscore = humanscore
        computerscore = computerscore +  1
        array = [totaltie,computerscore,humanscore]
        return array;
    } else if (compchoice == "scissors" && user == "scissors"){
        humanscore = humanscore
        computerscore = computerscore
        array = [totaltie,computerscore,humanscore]
        return array;
    }
}

function playgame(){

    for (let x = 0;x<5;x++){
        user = prompt("choose your weapon").toLowerCase();
        console.log("Computer chooses",compchoice = String(getCompChoice().toLowerCase()),",","You choose",user)
        playround()
    }
    const finalcomputerscore = array[1]
    const finalhumanscore = array[2]
    console.log("Computer score: ",finalcomputerscore)
    console.log("Your score: ",finalhumanscore)
    if (finalcomputerscore>finalhumanscore){
        let lose = "You Lose"
        return lose
    } else if (finalcomputerscore<finalhumanscore){
        let win = "You Win!!"
        return win
    } else {
        let ties = "It's a tie"
        return ties
    }
}*/
const btn1 = document.querySelector("button");
btn1.addEventListener("click", changepage);
function changepage (){
    window.location.href = "game.html"
}