// Funtion to create and track user's hand, and dealers hand
// const
import drawCard from './drawCard.js';
import { myDeck } from './genDeck.js';
const playerHand = [];
const dealerHand = [];
console.log('deck length before draw:', myDeck.length);
playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log('deck length after draw', myDeck.length);
export { playerHand, dealerHand };
