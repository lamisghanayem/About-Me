/* eslint-disable no-redeclare */
/* eslint-disable no-global-assign */
'use strict';

alert('Welcome to my site! let us play a fast quizzing game to know me better.');

let userName = prompt('Please type your name');
alert('welcome to my website ' +userName );

let score =0;
let name = prompt('Is my full name "Lamis Ghanayem"?').toLowerCase();


if ( name === 'yes' || name === 'y'){
  //console.log('Correct! Let us continue.');
  alert ('Correct! Let us continue.');
  score++;

}
else if ( name === 'no' || name === 'n')
{
  alert ('wrong answer.');
}
else {
  alert('Your answer should be Yes or No');
}

let country = prompt ('Do I come from Jordan"?').toLowerCase();
if ( country === 'yes' || country === 'y'){
  alert ('wrong answer.');
}
else if ( country === 'no' || country === 'n')
{
  //console.log('Correct! Let us continue.');
  alert ('Correct! Let us continue.');
  score++;
}
else {
  alert('Your answer should be Yes or No');
}

let degree = prompt ('Do I hold a bachelor degree in physics?').toLowerCase();
if ( degree === 'yes' || degree === 'y'){
  alert ('wrong answer.');
}
else if ( degree === 'no' || degree === 'n')
{
  //console.log('Correct! Let us continue.');
  alert ('Correct! Let us continue.');
  score++;
}
else {
  alert('Your answer should be Yes or No');
}


let experience = prompt ('Do I have work experience in my major?').toLowerCase();
if ( experience === 'yes' || experience === 'y'){
  //console.log('Correct! Let us continue.');
  alert ('Correct! Let us continue.');
  score++;
}
else if ( experience === 'no' || experience === 'n')
{
  alert ('wrong answer.');
}
else {
  alert('Your answer should be Yes or No');
}

let university = prompt ('Did I graduate from the Lebanese International University?').toLowerCase();
if ( university === 'yes' || university === 'y'){
  //console.log('Correct! Let us continue.');
  alert ('Correct!');
  score++;
}
else if ( university === 'no' || university === 'n')
{
  alert ('wrong answer.');
}
else {
  alert('Your answer should be Yes or No');
}



// num should be 12
for (let i=0; i<4; i++){
  let num = prompt('Now try to guess any number that comes to your mind');
  if (num <= 9){
    alert('The number you inserted is too low, try again');
  }
  else if (num >=15 ){
    alert('The number you inserted is too high, try again');}
  else if (num === '12'){
    alert('Correct!');
    score++;
    break;}
}
alert ('The correct number is 12');

let primeArray = ['2', '3', '5', '7', '11'];
firstFor:
for (let i= 0; i<6; i++){
  let answer = prompt('Give an example of prime numbers');
  for (let i2=0; i2<= primeArray.length; i2++){
    if (answer === primeArray[i2]){
      alert('Correct!');
      score++;
      break firstFor;
    }
    //else{ alert ('Wrong! try again');}
  }
}


alert('correct numbers are ' + primeArray);
alert ('Your total score is ' +score);


alert ('We are finished! Thanks for your particippation in this game ' + userName);
