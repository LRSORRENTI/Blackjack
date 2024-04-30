"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getHands_1 = require("./getHands");
function checkScore(hand) {
    let total = 0;
    for (const cardObj of hand) {
        // check if jack, queen or king
        if (cardObj.card.length > 2 && cardObj.card != 'Ace') {
            // if length is greater than 2 ie king, queen,
            // jack then assign 10
            // console.log(cardObj.card)
            total += 10;
        }
        else if (cardObj.card === 'Ace') {
            total += 1;
        }
        else {
            total += parseInt(cardObj.card);
        }
    }
    console.log(hand);
    return total;
}
console.log('player hand:', checkScore(getHands_1.playerHand));
console.log('dealer hand:', checkScore(getHands_1.dealerHand));
