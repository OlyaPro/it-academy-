//task 1
let string = "12232";
if (+string[0] + +string[1] + +string[2] === +string[3] + +string[4]) {
  console.log("Yes");
} else {
  console.log("No");
}

// task 2
let n = 1000;
let num = 0;

while (n > 50) {
  n /= 2;
  num++;
}

// task 3
const arr = [12, 15, 20, 25, 59, 79];
let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
let avg = total / arr.length;

// task 4
const arrayNumber = [1, 2, 3, 4, 5];

arrayNumber.splice(3, 0, "a", "b", "c");

// task 5
const arrayNum = [1, 2, 3, 4, 5];
arrayNum.splice(1, 0, "a", "b");
arrayNum.splice(6, 0, "c");
arrayNum.splice(8, 0, "e");

// task 6
const arrNum = [3, 4, 1, 2, 7];
arrNum.sort((a, b) => a - b);
arrNum.sort((a, b) => b - a);
