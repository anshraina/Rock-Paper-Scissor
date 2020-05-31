const game = ()=>{
    let pScore =0;
    let cScore = 0;
    
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    };

    //start match
    const playMatch = ()=>{
        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const computerOption = ['rock', 'paper', 'scissor'];
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand=>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });
        options.forEach((option)=>{
            option.addEventListener("click", function(){
                const compNumber = Math.floor(Math.random() * 3);
                const compChoice = computerOption[compNumber];
             
                setTimeout(() => {
                    // call compareHands
                compareHands(this.textContent, compChoice);
                
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${compChoice}.png`;
                }, 2000);


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    }

    const updateScore = ()=>{
        const playerScore = document.querySelector(".player-score p");
        const compScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        compScore.textContent = cScore;
    }
    const compareHands = (playerChoice, compChoice)=>{
        const winner = document.querySelector(".winner");
        if(playerChoice === compChoice){
            winner.textContent = "Its a tie";
            return;
        }
        //rock
        if(playerChoice === 'rock'){
            if(compChoice === 'scissor'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
           
        }
        if(playerChoice === 'paper'){
            if(compChoice === 'rock'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            
        }
        if(playerChoice === 'scissor'){
            if(compChoice === 'paper'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
           
        }
    }
    startGame();
    playMatch();
};

//Start
game();