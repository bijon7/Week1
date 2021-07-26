const numberOfDice = process.argv.slice (2);
const rollTheDice = function (number) {
  let array = [];
  let dice = 0;
for (let i = 1; i <= number; i++) {
  
    dice = Math.floor(Math.random() * 6 +1);
    array.push (dice);

}
console.log (array.join());
}
rollTheDice(numberOfDice);
