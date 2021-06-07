// import {splitMnemonic} from 'shamir-bip39'

// const { recoverMnemonic } = require('shamir-bip39');
var splitMnemonic = require('shamir-bip39')

const mnemonic =
  'jelly better achieve collect unaware mountain thought cargo oxygen act hood bridge';

// Generate 3 shares and require 2 to recover the mnemonic
const sharesA = splitMnemonic.splitMnemonic(mnemonic, 3, 2);
const sharesB = splitMnemonic.splitMnemonic(mnemonic, 3, 2);


console.log('sharesA ', sharesA)
console.log('sharesB ', sharesB)
console.log('mnemonic ', mnemonic)


const splits1A = {
  '1': 'measure claw evil museum bicycle insane oblige effort find level reform sea',
  '2': 'notable give supreme husband attend film grace turkey beauty used term purity'
  // '3': 'hamster fuel noise stable warfare rate buffalo modify swap home all inject'
};

const splits2A = {
  // '1': 'measure claw evil museum bicycle insane oblige effort find level reform sea',
  '2': 'notable give supreme husband attend film grace turkey beauty used term purity',
  '3': 'hamster fuel noise stable warfare rate buffalo modify swap home all inject'
}

const splits3A = {
  '1': 'measure claw evil museum bicycle insane oblige effort find level reform sea',
  // '2': 'notable give supreme husband attend film grace turkey beauty used term purity',
  '3': 'hamster fuel noise stable warfare rate buffalo modify swap home all inject'
}

const splits1B = {
  '1': 'average daring debris dignity draw bounce certain dragon question grid plunge crouch',
  '2': 'march face culture crater immense album bunker token wolf click ripple label'
  // '3': 'zone inform around canal test monitor swamp local snack exchange impose fault'
};

const splits2B = {
  // '1': 'average daring debris dignity draw bounce certain dragon question grid plunge crouch',
  '2': 'march face culture crater immense album bunker token wolf click ripple label',
  '3': 'zone inform around canal test monitor swamp local snack exchange impose fault'
};

const splits3B = {
  '1': 'average daring debris dignity draw bounce certain dragon question grid plunge crouch',
  // '2': 'march face culture crater immense album bunker token wolf click ripple label',
  '3': 'zone inform around canal test monitor swamp local snack exchange impose fault'
};


console.log("splits1A: ", splitMnemonic.recoverMnemonic(splits1A))
console.log("splits2A: ", splitMnemonic.recoverMnemonic(splits1A))
console.log("splits3A: ", splitMnemonic.recoverMnemonic(splits1A))

console.log("splits1B: ", splitMnemonic.recoverMnemonic(splits1B))
console.log("splits2B: ", splitMnemonic.recoverMnemonic(splits1B))
console.log("splits3B: ", splitMnemonic.recoverMnemonic(splits1B))