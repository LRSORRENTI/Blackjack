"use strict";
// Function to draw single card from generated deck
// import { myDeck } from "./genDeck";
// add way to grab a random card from a deck, maybe 
// generate a random number between 0 and 51 and then use 
// that number to grab the index?
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(myDeck.length)
function drawCard(deck) {
    // generate random number with max of deck.length which is 52
    const randomIdx = Math.floor(Math.random() * deck.length);
    const card = deck[randomIdx];
    // console.log(deck);
    // splice() is an important choice because we need to 
    // alter the length of the array, if we used slice() 
    // instead it would not modify the length
    deck.splice(randomIdx, 1);
    // console.log(randomIdx, card);
    return card;
}
exports.default = drawCard;
// const myCard = drawCard(myDeck);
