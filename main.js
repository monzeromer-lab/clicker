if(!localStorage.getItem("score"))
    localStorage.setItem("score", 0)

function updateDOM(e){
    document.getElementsByClassName("realgame")[0].innerHTML = e
}

function updateScore(vaule) {
    document.getElementById("score").innerHTML = vaule
}

function RandomInt(){
    return Math.floor(Math.random() * 100)
}


function updateBallLocation(){
    document.getElementById("ball").style.top = `${RandomInt()}%`;
    document.getElementById("ball").style.left = `${RandomInt()}%`;
}

localStorage.setItem("speed", "3000")
let GameStorage = {
    getSpeed: () => {
        return localStorage.getItem("speed")
    },
    setScore: (value) => {
        localStorage.setItem("score", value)
    },
    getScore: () => {
        return parseInt(localStorage.getItem("score"))
    },
    increaseScore: () => {
        let current = GameStorage.getScore()
        GameStorage.setScore(String(current++))
    }
}

const menu = `
<div class="menu">
            <div class="box">
                <h1 class="gamename">Clicker</h1>
                <span class="word">Because I'm Board</span>
        
                <div class="bottons">
                    <button class="startgame" onclick="StartGame()">Start Game</button>
                    <button class="settings">Settings</button>
                </div>
            </div>
        </div>
`;

const game = `<div class="playpage">
<div class="header">
    <p> Score: <span id="score">0</span></p>
    <p> highiest Score: <span id="high">0</span></p>
    <button class="endgame" onclick="goToMenu()">
        End
    </button>
    <hr>
</div>
<div class="clickes">
    <div class="ball" id="ball" onclick="increaseScore()"></div>
</div>
</div>`

function changeGamePage(pagename){
    if (pagename == "menu")
        updateDOM(menu)

    if (pagename == "game")
        updateDOM(game)
}

let ballRunner

function StartGame(){
    changeGamePage("game")
    ballRunner = setInterval(() => {
        updateBallLocation()
    },  parseInt(GameStorage.getSpeed()))
}

function goToMenu(){
    clearInterval(ballRunner) 
    changeGamePage("menu")
}

function increaseScore(){
    updateBallLocation()
    GameStorage.increaseScore()
    updateScore(GameStorage.getScore())
}
