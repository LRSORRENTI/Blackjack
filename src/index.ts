import drawCard from './drawCard';
import { card, myDeck } from './genDeck';
import { playerHand, dealerHand } from "./getHands";
import { checkScore } from './checkScore';

function updateHandsDisplay() {
    const playerHandDiv = document.getElementById('player-hand')!;
    const dealerHandDiv = document.getElementById('dealer-hand')!;

    // Clear current hands display
    playerHandDiv.innerHTML = `<h2>Player's Hand</h2>`;
    dealerHandDiv.innerHTML = `<h2>Dealer's Hand</h2>`;

    // Display player's hand
    playerHand.forEach(card => {
        playerHandDiv.innerHTML += `<p>${card.card} of ${card.suit}</p>`;
    });

    // Display dealer's hand
    dealerHand.forEach((card, index) => {
        if (index === 1 && !showDealerHoleCard) { // Hide second card initially
            dealerHandDiv.innerHTML += `<p>Hidden Card</p>`;
        } else {
            dealerHandDiv.innerHTML += `<p>${card.card} of ${card.suit}</p>`;
        }
    });
}

let showDealerHoleCard = false; // Initialize this variable to control visibility of the dealer's hole card


// Delay function to allow the UI to update
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function dealerHasSoftSeventeen(hand: card[]): boolean {
    const score = checkScore(hand);
    const containsAce = hand.some(card => card.card === 'Ace');
    return score === 17 && containsAce;
}

document.getElementById('hit-button')!.addEventListener('click', () => {
    playerHand.push(drawCard(myDeck));
    updateHandsDisplay();
    const playerScore = checkScore(playerHand);
    if (playerScore > 21) {
        alert("Busted! Player loses.");
        return;
    }
});

document.getElementById('stand-button')!.addEventListener('click', async () => {
    let dealerScore = checkScore(dealerHand);
    showDealerHoleCard = true; // Set to true to eventually show the hole card

    while (dealerScore < 17 || (dealerScore === 17 && dealerHasSoftSeventeen(dealerHand))) {
        dealerHand.push(drawCard(myDeck));
        updateHandsDisplay(); // Update the display after each card is drawn
        await delay(200); // Wait to allow UI to update
        dealerScore = checkScore(dealerHand); // Recalculate score after delay
    }

    // Delay the display of the final result to allow the UI to update
    setTimeout(() => {
        const playerScore = checkScore(playerHand);
        let resultMessage = `Final scores - Player: ${playerScore}, Dealer: ${dealerScore}\n`;
        if (playerScore > dealerScore || dealerScore > 21) {
            resultMessage += "Player wins!";
        } else if (playerScore < dealerScore) {
            resultMessage += "Dealer wins!";
        } else {
            resultMessage += "It's a tie!";
        }
        alert(resultMessage);
    }, 500); // Short delay before showing results
});
// document.getElementById('stand-button')!.addEventListener('click', () => {
//     let dealerScore = checkScore(dealerHand);
//     while (dealerScore < 17) {
//         dealerHand.push(drawCard(myDeck));
//         dealerScore = checkScore(dealerHand);
//     }
//     updateHandsDisplay(true); // reveal dealer hole card on stand
//     const playerScore = checkScore(playerHand);
//     alert(`Final scores - Player: ${playerScore}, Dealer: ${dealerScore}`);
//     if (playerScore > dealerScore || dealerScore > 21) {
//         alert("Player wins!");
//     } else if (playerScore < dealerScore) {
//         alert("Dealer wins!");
//     } else {
//         alert("It's a tie!");
//     }
// });
// document.getElementById('new-game-button').addEventListener('click', startNewGame);

// function startNewGame() {
//     // Reset game state
//     playerHand = [];
//     dealerHand = [];
//     showDealerHoleCard = false; // Hide dealer's hole card for new game
//     myDeck = genDeck(); // Regenerate or reshuffle the deck

//     // Reset UI
//     const playerHandDiv = document.getElementById('player-hand');
//     const dealerHandDiv = document.getElementById('dealer-hand');
//     playerHandDiv!.innerHTML = `<h2>Player's Hand</h2>`;
//     dealerHandDiv!.innerHTML = `<h2>Dealer's Hand</h2>`;

//     // Initial hands
//     playerHand.push(drawCard(myDeck));
//     playerHand.push(drawCard(myDeck));
//     dealerHand.push(drawCard(myDeck));
//     dealerHand.push(drawCard(myDeck));

//     // Update UI with initial hands
//     updateHandsDisplay();
// }

document.getElementById('new-game-button')!.addEventListener('click', () => {
    window.location.reload(); // This reloads the current document.
});

// Assuming cardData contains card information like { card: '10', suit: 'hearts' }
interface Card {
    card: string;
    suit: string;
}

function renderCard(suit: any) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `<img src="/assets/${suit}.svg" alt="${suit}">`;
    return cardDiv;
}

function renderHand(hand: Card[], handDiv: HTMLElement | null) {
    hand.forEach(card => {
        const cardDiv = renderCard(card.suit);
        handDiv!.appendChild(cardDiv);
    });
}

// Call renderHand for both dealer's and player's hands
renderHand(dealerHand, document.getElementById('dealer-hand'));
renderHand(playerHand, document.getElementById('player-hand'));


// Initial cards displayed
updateHandsDisplay(); // Initially hide dealer's hole card
