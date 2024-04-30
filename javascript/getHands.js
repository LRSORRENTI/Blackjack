"use strict";
// Funtion to create and track user's hand, and dealers hand
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealerHand = exports.playerHand = void 0;
const drawCard_1 = __importDefault(require("./drawCard"));
const genDeck_1 = require("./genDeck");
const playerHand = [];
exports.playerHand = playerHand;
const dealerHand = [];
exports.dealerHand = dealerHand;
console.log('deck length before draw:', genDeck_1.myDeck.length);
playerHand.push((0, drawCard_1.default)(genDeck_1.myDeck));
playerHand.push((0, drawCard_1.default)(genDeck_1.myDeck));
dealerHand.push((0, drawCard_1.default)(genDeck_1.myDeck));
dealerHand.push((0, drawCard_1.default)(genDeck_1.myDeck));
// console.log(playerHand)
// console.log(dealerHand)
// console.log(`player hand ${playerHand.map(card => `${card.card} of ${card.suit}`).join(', ')}`);
console.log('deck length after draw', genDeck_1.myDeck.length);
