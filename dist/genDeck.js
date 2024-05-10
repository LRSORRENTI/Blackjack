// Generate Deck File
export function genDeck() {
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
    // console.log('from getDeck.ts', deck.length)
    return deck;
}
const myDeck = genDeck();
// console.log('myDeck.length from genDeck.tsm', myDeck.length)
export { myDeck };
