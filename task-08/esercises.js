//task 1
let arrayNumber = [1, 2, 3, 4, 5, 6];

function getArrayReverse(arrayNumber) {
  return arrayNumber.reverse();
}

//task 2
let arrayNum = [3, 67, 15, 70, 100];

function getArrayMax(arrayNum) {
  return arrayNum.sort((a, b) => b - a)[0];
}

//task 3
function getArrayFibonachi(longArr) {
  var numbers = [0, 1];

  if (longArr <= 2) {
    var result = numbers.slice(0, m);
  } else {
    for (i = 0; i < longArr - 2; i++) {
      numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
    }
    return numbers;
  }
}

//task 4
let numberOne = 3487;
let numberTwo = 3794;
counter = 0;
counter1 = 0;

let arrFromNumberOne = ("" + numberOne).split("").map(Number);
let arrFromNumberTwo = ("" + numberTwo).split("").map(Number);

for (let i = 0; i < arrFromNumberOne.length; i++) {
  let value = arrFromNumberOne[i];
  let element = arrFromNumberOne[i];
  for (let j = 0; j < arrFromNumberTwo.length; j++)
    if (element === arrFromNumberTwo[j]) {
      console.log("совпадение по значению=" + element);
      counter1++;
    }
  if (value === arrFromNumberTwo[i]) {
    console.log("совпадение по позиции=" + value);
    counter++;
  }
}
console.log("Всего найдено совпадений по позиции=" + counter);
console.log("Всего найдено совпадений по значению=" + counter1);

//task 5
let numbers = [1, 5, 7, 6, 4, 9];

numbers.sort(function (a, b) {
  return a - b;
});

numbers.sort(function (a, b) {
  return b - a;
});

//task 6
const arrNumber = [1, 1, 2, 2, 3, 3];

let arrNumber2 = arrNumber.filter((item, index) => {
  return arrNumber.indexOf(item) === index;
});

