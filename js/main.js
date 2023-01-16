let boxes = document.getElementsByClassName('placeholder');
let playersTurn = 'X';
let array = [];

for(index=0; index < boxes.length; index++){
    boxes[index].addEventListener('click', playerInput);
}

function playerInput(){
    let tile = this;
    if (tile.innerHTML != 'X' && tile.innerHTML != 'O'){
        if (playersTurn == 'X'){
            tile.innerHTML = playersTurn;
            playersTurn = 'O';
            tile.classList.toggle('red');
            selectionSound();
        }
        else{
            tile.innerHTML = playersTurn;
            playersTurn = 'X';
            tile.classList.toggle('blue');
            selectionSound();
        }
    }
    playersMove();
    return playersTurn
}

function boardReset() {
    location.reload();
}
function selectionSound(){
    let sound = document.getElementById('selection-sound');
    sound.volume = 0.5;
    sound.play();
}

function gameOver(){
    document.getElementById('game-over').classList.toggle('game-over-tog');
    boxes.disabled = true;
}

function playersMove(){
    let one = String(document.getElementById('1').innerHTML);
    let two = String(document.getElementById('2').innerHTML);
    let three = String(document.getElementById('3').innerHTML);
    let four = String(document.getElementById('4').innerHTML);
    let five = String(document.getElementById('5').innerHTML);
    let six = String(document.getElementById('6').innerHTML);
    let seven = String(document.getElementById('7').innerHTML);
    let eight = String(document.getElementById('8').innerHTML);
    let nine = String(document.getElementById('9').innerHTML);
    let gameBoard = [one, two, three, four, five, six, seven, eight, nine];
    let comboOne = [one, two, three];
    let comboTwo = [four, five, six];
    let comboThree = [seven, eight, nine];
    let comboFour = [one, four, seven];
    let comboFive = [two, five, eight];
    let comboSix = [three, six, nine];
    let comboSeven = [one, five, nine];
    let comboEight = [three, five, seven];
    let set1 = new Set(comboOne);
    let set2 = new Set(comboTwo);
    let set3 = new Set(comboThree);
    let set4 = new Set(comboFour);
    let set5 = new Set(comboFive);
    let set6 = new Set(comboSix);
    let set7 = new Set(comboSeven);
    let set8 = new Set(comboEight);

    if(comboOne.includes('X')){
        if(parseInt(set1.size) == 1){
            console.log('X wins');
            gameOver()
        }
    }
    else if(comboOne.includes('O')){
        if(parseInt(set1.size) == 1){
            console.log('O wins');
            gameOver()
        }
    }
    if(comboTwo.includes('X')){
        if(parseInt(set2.size) == 1){
            console.log('X win');
        }
    }
    else if(comboTwo.includes('O')){
        if(parseInt(set2.size) == 1){
            console.log('O win');
        }
    }
    if(comboThree.includes('X')){
        if(parseInt(set3.size) == 1){
            console.log('X win');
        }
    }
    else if(comboThree.includes('O')){
        if(parseInt(set3.size) == 1){
            console.log('O win');
        }
    }
    if(comboFour.includes('X')){
        if(parseInt(set4.size) == 1){
            console.log('X win');
        }
    }
    else if(comboFour.includes('O')){
        if(parseInt(set4.size) == 1){
            console.log('O win');
        }
    }
    if(comboFive.includes('X')){
        if(parseInt(set5.size) == 1){
            console.log('X win');
        }
    }
    else if(comboFive.includes('O')){
        if(parseInt(set5.size) == 1){
            console.log('O win');
        }
    }
    if(comboSix.includes('X')){
        if(parseInt(set6.size) == 1){
            console.log('X win');
        }
    }
    else if(comboSix.includes('O')){
        if(parseInt(set6.size) == 1){
            console.log('O win');
        }
    }
    if(comboSeven.includes('X')){
        if(parseInt(set7.size) == 1){
            console.log('X win');
        }
    }
    else if(comboSeven.includes('O')){
        if(parseInt(set7.size) == 1){
            console.log('O win');
        }
    }
    if(comboEight.includes('X')){
        if(parseInt(set8.size) == 1){
            console.log('X win');
        }
    }
    else if(comboEight.includes('O')){
        if(parseInt(set8.size) == 1){
            console.log('O win');
        }
    }
}

