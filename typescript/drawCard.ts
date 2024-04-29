// Function to draw single card from generated deck
import { deck } from "./genDeck";
// add way to grab a random card from a deck, maybe 
// generate a random number between 0 and 51 and then use 
// that number to grab the index?


export default function drawCard() {
    // generate random number with max of deck.length which is 52
    const randomIdx = Math.floor(Math.random() * deck.length)
    const card = deck[randomIdx];
    console.log(deck);
    deck.splice(randomIdx, 1)
    console.log(randomIdx, card);
    return card
}

drawCard();


