

let turn = 'X'
let Gamewon = new Audio('GameWonMusic.mp3');
let Draw = new Audio('DrawMusic.wav')
let turnClick = new Audio('TurnMusic.wav')

let time = new Date();
let milisecs = time.getMilliseconds();
let secs = time.getSeconds()
// Function to change turn
let changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
//blockmusic after once played on winning
let musicblock = () => {
    setInterval(() => {
        Gamewon.pause()
    }, 50)
}

let IsGameover = false;
// Function to check for a win 
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


    win.forEach(elem => {
        if ((boxtext[elem[0]].innerText === boxtext[elem[1]].innerText) && (boxtext[elem[1]].innerText === boxtext[elem[2]].innerText) && boxtext[elem[0]].innerText !== '') {
            document.getElementById('infos').innerHTML = boxtext[elem[0]].innerText + ' HAVE WON'

            IsGameover = true;
            turn = null;
            Gamewon.play();
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = '600px'

            document.getElementById('gif').innerHTML = 'Congrats! ' + boxtext[elem[0]].innerText + ', U HAVE WON'
            turnClick.pause()

        }


    })


}

let checkdraw = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let count = 0;
    let draw = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (elem of draw) {
        if ((boxtext[elem].innerText !== "")) {
            count++;
        }
    }
    if (count === 9) {
        document.getElementById('infos').innerHTML = `Its' a DRAW`
        Draw.play();
        document.getElementById('gif').innerHTML = `Hehehehe it's a DRAW`
        document.querySelector('.drawgif').getElementsByTagName('img')[0].style.width = '350px'

    }
}



//Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turnClick.play()
            turn = changeTurn();

            // document.getElementByClassName('info').innerText = `"Turn for " + ${turn}`;
            checkwin();
            if (!IsGameover) {
                document.getElementById('infos').innerHTML = "Now Turn for  " + turn;
                checkdraw()

            }
        }

    })

})

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    })
    IsGameover = false;
    turn = 'X',
        document.getElementById('infos').innerHTML = "Now Turn for  " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = '0'
    document.querySelector('.drawgif').getElementsByTagName('img')[0].style.width = '0'

    document.getElementById('gif').innerHTML = ''

})



      //  document.getElementById('infos').innerHTML = `"Turn for " + ${turn}`
