/* eslint-disable no-redeclare */
/* eslint-disable no-global-assign */
'use strict';

alert('Welcome to my site! let us play a fast quizzing game to know me better.');

let name = prompt('Is my full name "Lamis Ghanayem"?').toLowerCase();


if ( name === 'yes' || name === 'y'){
  alert ('Correct! Let us continue.');
}
else if ( name === 'no' || name === 'n')
{
  alert ('wrong answer.');
}
else {
  alert('Your answer should be Yes or No');
}

let country = prompt ('Do I come from Jordan"?');

let degree = prompt ('Do I hold a bachelor degree in physics?');

let experience = prompt ('Do I have work experience in my major?');

let university = prompt ('Did I graduate from the Lebanese International University?');
