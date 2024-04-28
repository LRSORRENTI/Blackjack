"use strict";
// Generate Deck File
// cards should be object structure: 
// {card: "king", suit: "clubs"}
const deck = [];
const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
    "Jack", "Queen", "King", "Ace"];
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
for (const card of cards) {
    for (const suit of suits) {
        // console.log(card, suit);
        deck.push({ card: card, suit: suit });
    }
}
console.log(deck);
