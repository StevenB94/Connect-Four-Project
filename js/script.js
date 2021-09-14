

/*----- constants -----*/




/*----- app's state (variables) -----*/
let player; // keep track of which players turn it is
let winner; // keep track of who won
let replay; // restart game 
let start; // will start game
let colors; // will switch colors depending on player turn iff possible
let totalTurns = 0;

let gameBoard = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]



/*----- cached element references -----*/

const replayEl = document.querySelector('#replay');
const startEl = document.querySelector('#start');
const board = document.querySelector('.board');
const piece = document.getElementsByClassName('piece');

/*----- event listeners -----*/

// board.addEventListener('click', function(e){
//     console.log(e.target)
// })

board.addEventListener('click', function(e){
    console.log(e.target, 'check for divs')
    console.log(e.target.tagName)

    if (e.target.tagName === 'DIV' && player ) {
        e.target.style.backgroundColor = 'red';
    } else if (e.target.tagName === 'DIV' && !player ){
        e.target.style.backgroundColor = 'blue';

    }

    totalTurns++
    checkPlayerTurn()
});

/*----- functions -----*/

function checkPlayerTurn(){
        return player = totalTurns % 2    
}

function playerColor(){
    if (player === true){
    }
}

// counter % 2 returns true or false
// player 1 turn true? if false player 2 turn
// define fucntion that checks if its player 1 or not then figiure where to call in game loop