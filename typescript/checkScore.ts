import { playerHand, dealerHand } from "./getHands";

function checkScore(hand: any) {
    let total = 0;
    for(const card of hand){
        console.log(card);
    }
}

checkScore(playerHand)