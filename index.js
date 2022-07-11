
function start(){
let pics = ['images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'];
let randomNumber1 = pics[(Math.floor(Math.random()*pics.length))];
document.querySelector('.img1').setAttribute('src',randomNumber1);
let randomNumber2 = pics[(Math.floor(Math.random()*pics.length))];
document.querySelector('.img2').setAttribute('src',randomNumber2);

if(randomNumber1<randomNumber2){
    document.querySelector('h1').textContent = 'Player 2 Wins'
}
else if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent = 'Player 1 Wins'
}
else{
    document.querySelector('h1').textContent = 'DRAW'
}
}