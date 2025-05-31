let finalhumanscore = 0;
let finalcomputerscore = 0;
array = [finalcomputerscore,finalhumanscore]
const btn1 = document.querySelector("button");
btn1.addEventListener("click", user_rock);
function user_rock(){
    let user = "rock"
    let compchoice = String(getCompChoice().toLowerCase())
    let humanscore = 0;
    let computerscore = 0;
    console.log(playround())
    console.log(user)
    console.log(compchoice)
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
    function playround(){ 
        if (compchoice == "rock" && user == "rock"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array =[finalcomputerscore,finalhumanscore]
            return array
        } else if (compchoice == "rock" && user == "paper") {
            humanscore = humanscore  +1
            finalhumanscore = finalhumanscore+1
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Computer chooses Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "rock" && user == "scissors"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore = finalcomputerscore +1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Rock beats Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice ==  "paper" && user == "rock"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore = finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Paper beats Rock"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "paper" && user == "paper"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "paper" && user == "scissors"){
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore = finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Scissors beats Paper"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "scissors" && user == "rock"){
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore = finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Rock beats Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "scissors" && user == "paper"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore= finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Scissors beats Paper"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "scissors" && user == "scissors"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        }
    }
}
const btn2 = btn1.nextElementSibling
btn2.addEventListener("click",user_paper)
function user_paper(){
    let user = "paper"
    let compchoice = String(getCompChoice().toLowerCase())
    let humanscore = 0;
    let computerscore = 0;
    playround()
    console.log(user)
    console.log(compchoice)
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
    function playround(){ 
        if (compchoice == "rock" && user == "rock"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "rock" && user == "paper") {
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore = finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Computer chooses Rock"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "rock" && user == "scissors"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore = finalcomputerscore +1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Rock beats Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice ==  "paper" && user == "rock"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore = finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Paper beats Rock"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "paper" && user == "paper"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "paper" && user == "scissors"){
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore = finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Scissors beats Paper"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "scissors" && user == "rock"){
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore = finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Rock beats Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "scissors" && user == "paper"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore =finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Scissors beats Paper"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "scissors" && user == "scissors"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        }
    }
}
const btn3 = btn2.nextElementSibling
btn3.addEventListener("click",user_scissors)
function user_scissors(){
    let user = "scissors"
    let compchoice = String(getCompChoice().toLowerCase())
    let humanscore = 0;
    let computerscore = 0;
    console.log(playround())
    console.log(user)
    console.log(compchoice)
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
    function playround(){ 
        if (compchoice == "rock" && user == "rock"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "rock" && user == "paper") {
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore=finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Computer chooses Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "rock" && user == "scissors"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore =finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Rock beats Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice ==  "paper" && user == "rock"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore=finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Paper beats Rock"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "paper" && user == "paper"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "paper" && user == "scissors"){
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore=finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Scissors beats Paper"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice  == "scissors" && user == "rock"){
            humanscore = humanscore  +1
            computerscore = computerscore
            finalhumanscore=finalhumanscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Win! Rock beats Scissors"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "scissors" && user == "paper"){
            humanscore = humanscore
            computerscore = computerscore +  1
            finalcomputerscore=finalcomputerscore+1
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "You Lose! Scissors beats Paper"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        } else if (compchoice == "scissors" && user == "scissors"){
            humanscore = humanscore
            computerscore = computerscore
            const roundwinner = document.querySelector("p")
            roundwinner.textContent = "It's a tie"
            const scorep = document.querySelector("h3")
            scorep.innerHTML = String(finalhumanscore)
            const scorec = document.querySelector(".scorec")
            scorec.innerHTML = String(finalcomputerscore)
            array[0] =finalcomputerscore
            array[1]=finalhumanscore
            checkwinner()
            return array
        }
    }
}
console.log(array[0],array[1])
function checkwinner (){
    if (array[0]>=5 || array[1]>=5){
        if (array[0]>array[1]){
            const winner = document.querySelector(".winner")
            winner.textContent = "You Lose"
            const btn4 = document.querySelector(".btn4")
            btn4.textContent = "Play Again"
        } else if (array[0]<array[1]){
            winner = document.querySelector(".winner")
            winner.textContent = "You Win!!!"
            const btn4 = document.querySelector(".btn4")
            btn4.textContent = "Play Again"
        } else {
            winner = document.querySelector(".winner")
            winner.textContent = "It's a tie"
            const btn4 = document.querySelector(".btn4")
            btn4.textContent = "Play Again"
        }
    }
}
const btn4 = document.querySelector(".btn4")
btn4.addEventListener("click", changepage);
function changepage (){
    window.location.href = "index.html"
}