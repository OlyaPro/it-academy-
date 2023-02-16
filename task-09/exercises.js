//task-1
function getRandomSeconds(min, max) {
  return Math.random() * (max - min) + min;
}

const result1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(1);
  }, getRandomSeconds(1000, 5000))
);

const result2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(2);
  }, getRandomSeconds(1000, 5000))
);

const result3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(3);
  }, getRandomSeconds(1000, 5000))
);
async function getResultNumber() {
  try {
    const result = await Promise.race([result1, result2, result3]);
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Finally!");
  }
}
getResultNumber();

//task2
function returnRandomNumber(min, max) {
  let result = Math.floor(Math.random() * (max - min) + min);
  return result;
}
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(returnRandomNumber(1, 5));
    }, 3000);
  });
}
async function getMultiplyNum() {
  try {
    const numberOne = await getNum();
    const numberSquared = numberOne * numberOne;
    console.log(numberOne + "=" + numberSquared);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Finally!");
  }
}
getMultiplyNum();

//task3
function getNum1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(returnRandomNumber(6, 10));
    }, 5000);
  });
}
async function getSumNum() {
  try {
    const numberOne = await getNum();
    const numberTwo = await getNum1();
    const numberOnePlusNumberTwo = numberOne + numberTwo;
    console.log(numberOne + "+" + numberTwo + "=" + numberOnePlusNumberTwo);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Finally!");
  }
}
getSumNum();
