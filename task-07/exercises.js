// Task 1
function rollDice() {
  let rand1 = Math.floor(Math.random() * 6 + 1);
  let rand2 = Math.floor(Math.random() * 6 + 1);
  let rand3 = Math.floor(Math.random() * 6 + 1);
  let rand4 = Math.floor(Math.random() * 6 + 1);
  let rand5 = Math.floor(Math.random() * 6 + 1);
  let rand6 = Math.floor(Math.random() * 6 + 1);
  let finalScore=whoWon(rand1, rand2, rand3, rand4, rand5, rand6);
}
rollDice();
function whoWon(rand1, rand2, rand3, rand4, rand5, rand6) {
  let player1 = rand1 + rand3 + rand5;
  let player2 = rand2 + rand4 + rand6;
  let result=winner(player1, player2);
}
function winner(player1, player2) {
  if (player1 === player2) {
    console.log("Draw!");
  } else if (player1 < player2) {
    console.log("Player2 Winner!");
  } else {
    console.log("Player1 Winner!");
  }
}

//Task 2

let counter = 0;
let numOfMonth = 279;
let day = 13;
function numberOfFriday13(year) {
  for (var month = 0; month < numOfMonth; month++) {
    let numDay = new Date(year, month, day);
    if (numDay.getDay() === 5) {
      counter++;
    }
  }
  return counter;
}

//Task 3 (integer)
const integer = 20;
const iterations = 3;
const numbers = [];
let remainder = integer;

for (let i = 1; i <= iterations; i++) {
  if (i === iterations) {
    numbers.push(remainder);

    break;
  }
  const number = Math.round(Math.random() * remainder);
  numbers.push(number);
  remainder -= number;
}

const total = totalNumbers(numbers);

function totalNumbers(numbers) {
  return numbers.reduce((sum, value) => sum + value, 0);
}

//Task 3 (float)
const numInteger = 20;
const numOfIterations = 3;
const floats = [];
let remainderPart = numInteger;

for (let i = 1; i <= numOfIterations; i++) {
  if (i === numOfIterations) {
    floats.push(Number(remainderPart.toFixed(2)));

    break;
  }
  const float = Number((Math.random() * remainderPart).toFixed(2));
  floats.push(float);
  remainderPart -= float;
}

const amount = Math.round(amountNumbers(floats));

function amountNumbers(floats) {
  return floats.reduce((sum, value) => sum + value, 0);
}
