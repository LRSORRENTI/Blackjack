// import drawCard from './drawCard.js';
// import { myDeck } from './genDeck.js';
// import { playerHand, dealerHand } from "./getHands.js";
// import { checkScore } from './checkScore.js';

// function updateHandsDisplay() {
//     const playerHandDiv = document.getElementById('player-hand');
//     const dealerHandDiv = document.getElementById('dealer-hand');

//     // Clear current hands display
//     playerHandDiv.innerHTML = ``;
//     dealerHandDiv.innerHTML = ``;

//     // Display player's hand using the styled `.card` class
//     playerHand.forEach(card => {
//         const cardElement = renderCard(card);
//         playerHandDiv.appendChild(cardElement);
//     });

//     // Display dealer's hand, hiding the second card initially if not revealed
//     // dealerHand.forEach((card, index) => {
//     //     if (index === 1 && !showDealerHoleCard) {
//     //         // Placeholder for hidden card
//     //         const hiddenCardDiv = document.createElement('div');
//     //         hiddenCardDiv.classList.add('card', 'hidden');
//     //         dealerHandDiv.appendChild(hiddenCardDiv);
//     //     } else {
//     //         const cardElement = renderCard(card);
//     //         dealerHandDiv.appendChild(cardElement);
//     //     }
//     // });
//     dealerHand.forEach((card, index) => {
//         const cardElement = renderCard(card, index === 1 && !showDealerHoleCard);
//         dealerHandDiv.appendChild(cardElement);
//     });
// }
// let showDealerHoleCard = false; // Initialize this variable to control visibility of the dealer's hole card
// // Delay function to allow the UI to update
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// function dealerHasSoftSeventeen(hand) {
//     const score = checkScore(hand);
//     const containsAce = hand.some(card => card.card === 'Ace');
//     return score === 17 && containsAce;
// }
// document.getElementById('hit-button').addEventListener('click', () => {
//     playerHand.push(drawCard(myDeck));
//     updateHandsDisplay();
//     const playerScore = checkScore(playerHand);
//     if (playerScore > 21) {
//         setTimeout(() => {
//             alert("Busted! Player loses.");
//         }, '500')
//         // alert("Busted! Player loses.");
//         return;
//     }
// });
// document.getElementById('stand-button').addEventListener('click', async () => {
//     let dealerScore = checkScore(dealerHand);
//     showDealerHoleCard = true; // Set to true to eventually show the hole card
//     while (dealerScore < 17 || (dealerScore === 17 && dealerHasSoftSeventeen(dealerHand))) {
//         dealerHand.push(drawCard(myDeck));
//         updateHandsDisplay(); // Update the display after each card is drawn
//         await delay(200); // Wait to allow UI to update
//         dealerScore = checkScore(dealerHand); // Recalculate score after delay
//     }
//     // Delay the display of the final result to allow the UI to update
//     setTimeout(() => {
//         const playerScore = checkScore(playerHand);
//         let resultMessage = `Final scores - Player: ${playerScore}, Dealer: ${dealerScore}\n`;
//         if (playerScore > dealerScore || dealerScore > 21) {
//             resultMessage += "Player wins!";
//         }
//         else if (playerScore < dealerScore) {
//             resultMessage += "Dealer wins!";
//         }
//         else {
//             resultMessage += "It's a tie!";
//         }
//         alert(resultMessage);
//     }, 500); // Short delay before showing results
// });

// document.getElementById('new-game-button').addEventListener('click', () => {
//     window.location.reload(); // This reloads the current document.
// });

// // function renderCard(card) {
// //     // Create a card div with the required styles
// //     const cardDiv = document.createElement('div');
// //     cardDiv.classList.add('card');

// //     // Add the suit and value
// //     cardDiv.innerHTML = `${card.card} <br> ${card.suit}`;

// //     return cardDiv;
// // }

// function renderCard(card, isHidden = false) {
//     const suitSymbols = {
//         'Hearts': '&hearts;',
//         'Diamonds': '&diams;',
//         'Clubs': '&clubs;',
//         'Spades': '&spades;'
//     };

//     const suitColors = {
//         'Hearts': 'red',
//         'Diamonds': 'red',
//         'Clubs': 'black',
//         'Spades': 'black'
//     };

//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');

//     if (isHidden) {
//         const cardBack = document.createElement('img');
//         cardBack.src = 'img/redCardBack.jpg';
//         cardBack.alt = 'Card Back';
//         cardBack.classList.add('card-back');
//         cardDiv.appendChild(cardBack);
//     } else {
//         // Add the top left suit and value
//         const topLeftDiv = document.createElement('div');
//         topLeftDiv.classList.add('corner', 'top-left');
//         topLeftDiv.innerHTML = `${card.card} <br> ${suitSymbols[card.suit]}`;
//         topLeftDiv.style.color = suitColors[card.suit];

//         // Add the bottom right suit and value
//         const bottomRightDiv = document.createElement('div');
//         bottomRightDiv.classList.add('corner', 'bottom-right');
//         bottomRightDiv.innerHTML = `${card.card} <br> ${suitSymbols[card.suit]}`;
//         bottomRightDiv.style.color = suitColors[card.suit];

//         // Add the center value
//         const centerDiv = document.createElement('div');
//         centerDiv.classList.add('center');
//         centerDiv.innerHTML = `${card.card}`;
//         centerDiv.style.color = suitColors[card.suit];

//         cardDiv.appendChild(topLeftDiv);
//         cardDiv.appendChild(bottomRightDiv);
//         cardDiv.appendChild(centerDiv);
//     }

//     return cardDiv;
// }


// function renderHand(hand, handDiv) {
//     hand.forEach(card => {
//         const cardDiv = renderCard(card.suit);
//         handDiv.appendChild(cardDiv);
//     });
// }
// // Call renderHand for both dealer's and player's hands
// renderHand(dealerHand, document.getElementById('dealer-hand'));
// renderHand(playerHand, document.getElementById('player-hand'));
// // Initial cards displayed
// updateHandsDisplay(); // Initially hide dealer's hole card
import drawCard from './drawCard.js';
import { myDeck } from './genDeck.js';
import { playerHand, dealerHand } from "./getHands.js";
import { checkScore } from './checkScore.js';

let gameEnded = false; // Track if the game has ended
let showDealerHoleCard = false; // Initialize this variable to control visibility of the dealer's hole card

function updateHandsDisplay() {
    const playerHandDiv = document.getElementById('player-hand');
    const dealerHandDiv = document.getElementById('dealer-hand');

    // Clear current hands display
    playerHandDiv.innerHTML = ``;
    dealerHandDiv.innerHTML = ``;

    // Display player's hand using the styled `.card` class
    playerHand.forEach(card => {
        const cardElement = renderCard(card);
        playerHandDiv.appendChild(cardElement);
    });

    // Display dealer's hand, hiding the second card initially if not revealed
    dealerHand.forEach((card, index) => {
        const cardElement = renderCard(card, index === 1 && !showDealerHoleCard);
        dealerHandDiv.appendChild(cardElement);
    });
}

// Delay function to allow the UI to update
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function dealerHasSoftSeventeen(hand) {
    const score = checkScore(hand);
    const containsAce = hand.some(card => card.card === 'Ace');
    return score === 17 && containsAce;
}

document.getElementById('hit-button').addEventListener('click', () => {
    if (gameEnded) return;
    playerHand.push(drawCard(myDeck));
    updateHandsDisplay();
    const playerScore = checkScore(playerHand);
    if (playerScore > 21) {
        setTimeout(() => {
            alert("Busted! Player loses.");
        }, 500);
        endGame();
        return;
    }
});

document.getElementById('stand-button').addEventListener('click', async () => {
    if (gameEnded) return;
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
        endGame();
    }, 500); // Short delay before showing results
});

document.getElementById('new-game-button').addEventListener('click', () => {
    window.location.reload(); // This reloads the current document.
});

// Function to render a card
function renderCard(card, isHidden = false) {
    const suitSymbols = {
        'Hearts': '&hearts;',
        'Diamonds': '&diams;',
        'Clubs': '&clubs;',
        'Spades': '&spades;'
    };

    const suitColors = {
        'Hearts': 'red',
        'Diamonds': 'red',
        'Clubs': 'black',
        'Spades': 'black'
    };

    const icons = {
        'King': '&#x2654;',  // Unicode for a King chess piece as a placeholder
        'Queen': '&#x2655;', // Unicode for a Queen chess piece as a placeholder
        'Jack': '&#x2149;',  // Unicode for a script letter J as a placeholder
        'Ace': '&#x2664;'    // Unicode for a spade as a placeholder
    };

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    if (isHidden) {
        const cardBack = document.createElement('img');
        cardBack.src = 'img/redCardBack.jpg';
        cardBack.alt = 'Card Back';
        cardBack.classList.add('card-back');
        cardDiv.appendChild(cardBack);
    } else {
        // Add the top left suit and value
        const topLeftDiv = document.createElement('div');
        topLeftDiv.classList.add('corner', 'top-left');
        topLeftDiv.innerHTML = `${card.card} <br> ${suitSymbols[card.suit]}`;
        topLeftDiv.style.color = suitColors[card.suit];

        // Add the bottom right suit and value
        const bottomRightDiv = document.createElement('div');
        bottomRightDiv.classList.add('corner', 'bottom-right');
        bottomRightDiv.innerHTML = `${card.card} <br> ${suitSymbols[card.suit]}`;
        bottomRightDiv.style.color = suitColors[card.suit];

        // Add the center value or icon
        const centerDiv = document.createElement('div');
        centerDiv.classList.add('center');
        if (icons[card.card]) {
            centerDiv.innerHTML = icons[card.card];
            centerDiv.classList.add('icon-center'); // Add class for icon center
        } else {
            centerDiv.innerHTML = `${card.card}`;
        }
        centerDiv.style.color = suitColors[card.suit];

        cardDiv.appendChild(topLeftDiv);
        cardDiv.appendChild(bottomRightDiv);
        cardDiv.appendChild(centerDiv);
    }

    return cardDiv;
}

// Function to render a hand
function renderHand(hand, handDiv) {
    hand.forEach(card => {
        const cardDiv = renderCard(card);
        handDiv.appendChild(cardDiv);
    });
}


// Function to end the game and disable buttons
function endGame() {
    gameEnded = true;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
}

// Call renderHand for both dealer's and player's hands
renderHand(dealerHand, document.getElementById('dealer-hand'));
renderHand(playerHand, document.getElementById('player-hand'));

// Initial cards displayed
updateHandsDisplay(); // Initially hide dealer's hole card
