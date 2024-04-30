import drawCard from './drawCard';
import { myDeck } from './genDeck';
import { playerHand, dealerHand } from "./getHands";
import { checkScore } from './checkScore';

// Create game loop:

console.log("The starting player hand is ", playerHand);
console.log('The starting player score is ', checkScore(playerHand));
console.log("The starting dealer hand is ", dealerHand);
console.log('The starting dealer score is ', checkScore(dealerHand));

while(true) {
    // deal player card 
    playerHand.push(drawCard(myDeck));
    // check if player busts
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
    if (playerScore > 21) {
        // break out of while loop if below conditions are met
        console.log("Player loses, your final score is: ", playerScore)
        console.log("The dealer had: ", dealerScore);
        break;
    };
    // check if player has 21
    if(playerScore === 21) {
        console.log('Player wins! Your final score is ', playerScore);
        console.log('The dealer score was ', dealerScore);
        break;
    };
    // deal dealer card
    dealerHand.push(drawCard(myDeck));
    // check if dealer busts
    dealerScore = checkScore(dealerHand);
    // check if dealer has 21
    if(dealerScore > 21) {
        console.log('Player wins! Your final score is ', playerScore);
        console.log('The dealer score was ', dealerScore);
        break;
    };
    if(dealerScore === 21) {
        console.log("Player loses, your final score is: ", playerScore)
        console.log("The dealer had: ", dealerScore);
        break;
    };
};

console.log("The ending player hand is ", playerHand);
console.log('The ending player score is ', checkScore(playerHand));
console.log("The ending dealer hand is ", dealerHand);
console.log('The ending dealer score is ', checkScore(dealerHand));