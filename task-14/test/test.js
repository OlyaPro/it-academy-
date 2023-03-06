const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });

  test.each([
    [[-1, 1], 0],
    [[0, 1, 2, 3], 6],
    [[2], 2],
    [[50.5, 1], 51.5],
    [[4.5, 3.5], 8],
    [[], 0],
    [[0, 0, 0], 0],
  ])('should add %p to equal %d', (numbers, expected) => {
    const result = calculator.add(...numbers);
    expect(result).toEqual(expected);
  });

  test.each([
    [[1, 2, 3, 2], 12],
    [[-1, 1], -1],
    [[], 1],
    [[1], 1],
    [[1, 0], 0],
    [[0, 0, 0], 0],
  ])('should multiply %p to equal %d', (numbers, expected) => {
    const result = calculator.multiply(...numbers);
    expect(result).toEqual(expected);
  });

  test.each([
    [2, 2, 0],
    [-3, 4, -7],
    [4, -3, 7],
    [0, 0, 0],
    [-2, -2, 0],
    [-6.5, -6.5, 0],
  ])('should subtract %d from %d to equal %d', (reduced, subtrahend, expected) => {
    const result = calculator.subtraction(reduced, subtrahend);
    expect(result).toEqual(expected);
  });

  test.each([
    [3.5, 3.5, 1],
    [12, 3, 4],
    [-12, 3, -4],
    [12, -3, -4],
    [5, 0, 0],
    [0, 5, 0],
    [-2, -2, 1],
  ])('should divide %d by %d to equal %d', (dividend, divider, expected) => {
    const result = calculator.divide(dividend, divider);
    expect(result).toEqual(expected);
  });

  test.each([
    [-2, 4],
    [0, 0],
    [1, 1],
    [4, 16],
    [50, 2500],
  ])('should square %d to equal %d', (number, expected) => {
    const result = calculator.exponentiation(number);
    expect(result).toEqual(expected);
  });
});
