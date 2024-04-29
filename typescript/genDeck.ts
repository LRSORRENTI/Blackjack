// Generate Deck File

// cards should be object structure: 
// {card: "king", suit: "clubs"}

type card = {
    card: string;
    suit: string;
    
};

export function genDeck(): card[]{
const deck = [];
const cards: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
"Jack", "Queen", "King", "Ace"];
const suits: string[] = ["Hearts", "Clubs", "Diamonds", "Spades"];

for(const card of cards) {
    for(const suit of suits) {
        // console.log(card, suit);
        deck.push({card: card, suit: suit});
    }
}
// console.log('from getDeck.ts', deck.length)
return deck;
}

const myDeck = genDeck();
// console.log('myDeck.length from genDeck.tsm', myDeck.length)
export {myDeck, card};
