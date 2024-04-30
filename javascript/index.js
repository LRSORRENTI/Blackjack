import drawCard from './drawCard.js';
import { myDeck } from './genDeck.js';
import { playerHand, dealerHand } from "./getHands.js";
import checkScore from './checkScore.js';
function updateHandsDisplay() {
    const playerHandDiv = document.getElementById('player-hand');
    const dealerHandDiv = document.getElementById('dealer-hand');
    // Clear current hands display
    playerHandDiv.innerHTML = `<h2>Player's Hand</h2>`;
    dealerHandDiv.innerHTML = `<h2>Dealer's Hand</h2>`;
    // Display player's hand
    playerHand.forEach(card => {
        playerHandDiv.innerHTML += `<p>${card.card} of ${card.suit}</p>`;
    });
    // Display dealer's hand, hide second card
    dealerHandDiv.innerHTML += `<p>${dealerHand[0].card} of ${dealerHand[0].suit}</p>`;
    dealerHandDiv.innerHTML += `<p>Hidden Card</p>`;
}
document.getElementById('hit-button').addEventListener('click', () => {
    playerHand.push(drawCard(myDeck));
    const playerScore = checkScore(playerHand);
    updateHandsDisplay();
    if (playerScore > 21) {
        alert("Busted! Player loses.");
        return;
    }
});
document.getElementById('stand-button').addEventListener('click', () => {
    let dealerScore = checkScore(dealerHand);
    while (dealerScore < 17) {
        dealerHand.push(drawCard(myDeck));
        dealerScore = checkScore(dealerHand);
    }
    updateHandsDisplay();
    alert(`Final scores - Player: ${checkScore(playerHand)}, Dealer: ${dealerScore}`);
});
// Initial cards display
updateHandsDisplay();
