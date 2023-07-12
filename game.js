let gameCells = document.querySelectorAll(".cell");
let player1 = document.querySelector(".Player1");
let player2 = document.querySelector(".Player2")
let restartBtn = document.querySelector(".restart")
let user = "X";
let System = "O"
let playerTurn = user;
player1.textContent=`Player1: ${user}`
player2.textContent=`Player2: ${System}`

let startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener("click", handleClick
        )
    })
}
let handleClick = (e) => {
    if (e.target.textContent === '') {
        e.target.textContent = playerTurn;
        if (checkWin()) {
          // alert(`${playerTurn} is a Winner`);
          swal(`${playerTurn}`, " is a Winner");
            disabledGameCells()
        }
        else if (checkTie()) {
            //alert("Its is a Tie");
            swal("Its a Tie",);
            disabledGameCells()
        }
        else {
            changePlayerTurn();
        }
    }
}

let changePlayerTurn = () => {
    // if(playerTurn===userPlayer){
    //     playerTurn=SystemPlayer
    // }
    // else{
    //     playerTurn=userPlayer
    // }
    playerTurn = playerTurn == user ? System : user
}
let checkWin = () => {
    let winningConditions =
        [
            [0, 1, 2, 5,5,0],
            [3, 4, 5, 5,15,0],
            [6, 7, 8, 5,25,0],
            [0, 3, 6, -5,15,90],
            [1, 4, 7, 5,5,90],
            [2, 5, 8, 5,5,90],
            [0, 4, 8, 5,5,45],
            [2, 4, 6, 5,5,135],
        ];
    for (let i = 0; i < winningConditions.length; i++) {
        const [pos1, pos2, pos3] = winningConditions[i];
        if (gameCells[pos1].textContent !== '' && gameCells[pos1].textContent == gameCells[pos2].textContent && gameCells[pos2].textContent === gameCells[pos3].textContent) {
            return true
        }

    }
    return false
}
const checkTie = () => {
    let emptyCell = 0;
    gameCells.forEach(cell => {
        if (cell.textContent === '') {
            emptyCell++;
        }
    });
    return emptyCell == 0 && !checkWin()
}
let disabledGameCells = ()=>{
    gameCells.forEach(cell =>{
        cell.removeEventListener("click",handleClick);
        cell.classList.add("disabled")
    })
}
let restartGame = ()=>{
gameCells.forEach(cell =>{
    cell.textContent='';
    cell.classList.remove("disabled")
})
startGame();

}
restartBtn.addEventListener("click",restartGame);

startGame();
