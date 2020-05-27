const game = ()=>{
    let playerScore =0;
    let computerScore = 0;
    
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            
            matchScreen.classList.add("fadeIn");
        });
    };
    startGame();
};

//Start
game();