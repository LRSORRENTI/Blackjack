"use strict";
// Generate Deck File
Object.defineProperty(exports, "__esModule", { value: true });
exports.deck = exports.genDeck = void 0;
function genDeck() {
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
    return deck;
}
exports.genDeck = genDeck;
const deck = genDeck();
exports.deck = deck;
