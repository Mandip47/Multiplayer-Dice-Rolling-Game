'use strict';

const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
const p1Score = document.querySelector('#score--0');
const p1CurrentScore = document.querySelector('#current--0');
const p2Score = document.querySelector('#score--1');
const p2CurrentScore = document.querySelector('#current--1');
const imgDice = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//initial status
let scores,currentScore,activePlayer,playing;

const initialStatus = function(){
scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

p1Score.textContent = 0;
p2Score.textContent = 0;
p1CurrentScore.textContent = 0;
p2CurrentScore.textContent = 0;

imgDice.classList.add('hidden');
p1.classList.add('player--active');
p2.classList.remove('player--active');
p1.classList.remove('player--winner');
p2.classList.remove('player--winner');
}
initialStatus();
//player switch
function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    
activePlayer = activePlayer === 0 ? 1 : 0;
    
  p1.classList.toggle('player--active'); 
  p2.classList.toggle('player--active');
  console.log(activePlayer);//active player
  }

// roll the dice
const rollTheDice = function (){
  //randomNumber generate
  if(playing){
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  //dice roll
  imgDice.src = `dice-${diceNumber}.png`;
  imgDice.classList.remove('hidden');
    if(diceNumber !== 1){
    currentScore += diceNumber;
    console.log(activePlayer);//active player
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }else{
  switchPlayer();
      }
  }}

// hold button
const holdBtnfunction = function(){
  if(playing){

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
if(scores[activePlayer] >= 100){
  playing = false;
  imgDice.classList.add('hidden');
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}else{
  switchPlayer();
}
// currentScore = 0;
// document.getElementById(`current--${activePlayer}`).textContent = 0;   
// activePlayer = activePlayer === 0 ? 1 : 0; 
//   p1.classList.toggle('player--active'); 
//   p2.classList.toggle('player--active');
  
}}

//event listener
rollBtn.addEventListener('click',rollTheDice);
holdBtn.addEventListener('click',holdBtnfunction);
newBtn.addEventListener('click',initialStatus);
