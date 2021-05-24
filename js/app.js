/* eslint-disable no-redeclare */
/* eslint-disable no-global-assign */
'use strict';

alert('Welcome to my site! let us play a fast quizzing game to know me better.');

let userName = prompt('Please type your name');
alert('welcome to my website ' +userName );

let name = prompt('Is my full name "Lamis Ghanayem"?').toLowerCase();


if ( name === 'yes' || name === 'y'){
  //console.log('Correct! Let us continue.');
  alert ('Correct! Let us continue.');
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
}
else {
  alert('Your answer should be Yes or No');
}


let experience = prompt ('Do I have work experience in my major?').toLowerCase();
if ( experience === 'yes' || experience === 'y'){
  //console.log('Correct! Let us continue.');
  alert ('Correct! Let us continue.');
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
}
else if ( university === 'no' || university === 'n')
{
  alert ('wrong answer.');
}
else {
  alert('Your answer should be Yes or No');
}

alert ('We are finished! Thanks for your particippation in this game ' + userName);
