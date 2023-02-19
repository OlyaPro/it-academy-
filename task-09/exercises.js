//task-1
function getRandomSeconds(min, max) {
    return Math.floor(Math.random() * (max -  min + 1) + min);
  }
  const result1 = returnResult()
  const result2 = returnResult()
  const result3 = returnResult()
  
  function returnResult() {
      return new Promise((res) => {
          const number = getRandomSeconds(1, 3);
          setTimeout(() => {
              res(number)
          }, getRandomSeconds(1000, 5000));
      })
  }
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
  getResultNumber()

//task2
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getRandomSeconds(1, 5));
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
      resolve(getRandomSeconds(6, 10));
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
