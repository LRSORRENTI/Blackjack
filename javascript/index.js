"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drawCard_1 = __importDefault(require("./drawCard"));
const genDeck_1 = require("./genDeck");
const getHands_1 = require("./getHands");
const checkScore_1 = require("./checkScore");
// Create game loop:
console.log("The starting player hand is ", getHands_1.playerHand);
console.log('The starting player score is ', (0, checkScore_1.checkScore)(getHands_1.playerHand));
console.log("The starting dealer hand is ", getHands_1.dealerHand);
console.log('The starting dealer score is ', (0, checkScore_1.checkScore)(getHands_1.dealerHand));
while (true) {
    // deal player card 
    getHands_1.playerHand.push((0, drawCard_1.default)(genDeck_1.myDeck));
    // check if player busts
    const playerScore = (0, checkScore_1.checkScore)(getHands_1.playerHand);
    let dealerScore = (0, checkScore_1.checkScore)(getHands_1.dealerHand);
    if (playerScore > 21) {
        // break out of while loop if below conditions are met
        console.log("Player loses, your final score is: ", playerScore);
        console.log("The dealer had: ", dealerScore);
        break;
    }
    ;
    // check if player has 21
    if (playerScore === 21) {
        console.log('Player wins! Your final score is ', playerScore);
        console.log('The dealer score was ', dealerScore);
        break;
    }
    ;
    // deal dealer card
    getHands_1.dealerHand.push((0, drawCard_1.default)(genDeck_1.myDeck));
    // check if dealer busts
    dealerScore = (0, checkScore_1.checkScore)(getHands_1.dealerHand);
    // check if dealer has 21
    if (dealerScore > 21) {
        console.log('Player wins! Your final score is ', playerScore);
        console.log('The dealer score was ', dealerScore);
        break;
    }
    ;
    if (dealerScore === 21) {
        console.log("Player loses, your final score is: ", playerScore);
        console.log("The dealer had: ", dealerScore);
        break;
    }
    ;
}
;
console.log("The ending player hand is ", getHands_1.playerHand);
console.log('The ending player score is ', (0, checkScore_1.checkScore)(getHands_1.playerHand));
console.log("The ending dealer hand is ", getHands_1.dealerHand);
console.log('The ending dealer score is ', (0, checkScore_1.checkScore)(getHands_1.dealerHand));
