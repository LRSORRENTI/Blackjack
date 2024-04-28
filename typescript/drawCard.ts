// Function to draw single card from generated deck
import { deck } from "./genDeck";
// add way to grab a random card from a deck, maybe 
// generate a random number between 0 and 51 and then use 
// that number to grab the index?
export default function drawCard() {

}
let getNum = Math.floor(Math.random() * 51)
console.log(getNum)
for(let i = 0; i < 1000; i++) {
    let getNumLoop = Math.floor(Math.random() * 51)
    if(i === 51){
        console.log(i, 'hhoray')
    }
    console.log(getNumLoop)
}