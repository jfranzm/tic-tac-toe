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
            tile.classList.add('red');
        }
        else{
            tile.innerHTML = playersTurn;
            playersTurn = 'X';
            tile.classList.add('blue');
        }
    }
    playersMove();
    return playersTurn
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

    if(!comboOne.includes('A')){
        if(parseInt(set1.size) == 1){
            console.log('win');
        }
    }
    else if(!comboTwo.includes('A')){
        if(parseInt(set2.size) == 1){
            console.log('win');
        }
    }
    else if(!comboThree.includes('A')){
        if(parseInt(set3.size) == 1){
            console.log('win');
        }
    }
    else if(!comboFour.includes('A')){
        if(parseInt(set4.size) == 1){
            console.log('win');
        }
    }
    else if(!comboFive.includes('A')){
        if(parseInt(set1.size) == 1){
            console.log('win');
        }
    }
    else if(!comboSix.includes('A')){
        if(parseInt(set6.size) == 1){
            console.log('win');
        }
    }
    else if(!comboSeven.includes('A')){
        if(parseInt(set7.size) == 1){
            console.log('win');
        }
    }
    else if(!comboEight.includes('A')){
        if(parseInt(set8.size) == 1){
            console.log('win');
        }
    }
    else if(!gameBoard.includes('A')){
        if((parseInt(set1.size) != 1) && (parseInt(set2.size) != 1) && (parseInt(set3.size) != 1) && (parseInt(set4.size) != 1) && (parseInt(set5.size) != 1) && (parseInt(set6.size) != 1) && (parseInt(set7.size) != 1) && (parseInt(set8.size) != 1)){
            console.log('tie...')
        }
    }
}

function boardReset(){
    document.getElementsById('container').reset();
}