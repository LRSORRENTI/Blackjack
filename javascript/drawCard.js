"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add way to grab a random card from a deck, maybe 
// generate a random number between 0 and 51 and then use 
// that number to grab the index?
function drawCard() {
}
exports.default = drawCard;
let getNum = Math.floor(Math.random() * 51);
console.log(getNum);
for (let i = 0; i < 1000; i++) {
    let getNumLoop = Math.floor(Math.random() * 51);
    if (i === 51) {
        console.log(i, 'hhoray');
    }
    console.log(getNumLoop);
}
