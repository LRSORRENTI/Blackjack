// Funtion to create and track user's hand, and dealers hand

import drawCard from './drawCard';
import { myDeck } from './genDeck';

const playerHand: any[] = [];
const dealerHand: any[] = [];

console.log('from getHands.ts', myDeck.length)
playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));

dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

// console.log(playerHand)
// console.log(dealerHand)
// console.log(`player hand ${playerHand.map(card => `${card.card} of ${card.suit}`).join(', ')}`);
console.log(myDeck.length)
export {playerHand, dealerHand};