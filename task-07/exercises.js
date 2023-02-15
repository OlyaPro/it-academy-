// Task 1
function rollDice() {
  return Math.floor(Math.random() * (6+1-1) + 1;
}

function playGame() {
  let player1 = 0;
  let player2 = 0;

  for (let i = 0; i < 3; i++) {
    player1 += rollDice();
    player2 += rollDice();
  }
  if (player1 === player2) {
    console.log("Draw!");
  } else if (player1 < player2) {
    console.log("Player2 Winner!");
  } else {
    console.log("Player1 Winner!");
  }
}
playGame();
//Task 2
function getcountFriday13th(startDate, endDate) {
  let count = 0;
  let currentDate = startDate;
  while (currentDate <= endDate) {
    if (currentDate.getDay() === 5 && currentDate.getDate() === 13) {
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return count;
}
const startDate = new Date(2000, 0, 1); 
const endDate = new Date(); 

const count = getcountFriday13th(startDate, endDate);
console.log(count);

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
