// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const args = {a: 2, b: 3, action: Action.Add}
    expect(simpleCalculator(args)).toBe(5)
  })

  test('should subtract two numbers', () => {
    // Write your test here
    const args = {a: 10, b: 3, action: Action.Subtract}
    expect(simpleCalculator(args)).toBe(7)
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const args = {a: 9, b: 3, action: Action.Multiply}
    expect(simpleCalculator(args)).toBe(27)
  });

  test('should divide two numbers', () => {
    // Write your test here
    const args = {a: 10, b: 2, action: Action.Divide}
    expect(simpleCalculator(args)).toBe(5)
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const args = {a: 2, b: 3, action: Action.Exponentiate}
    expect(simpleCalculator(args)).toBe(8)
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const invalidAction = {a: 2, b: 2, action: '--+'}
    expect(simpleCalculator(invalidAction)).toBeNull()
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const invalidArgs = {a: '', b: 4, action: Action.Divide}
    const invalidArgs2 = {a: {'key': 'v'}, b: 4, action: Action.Divide}
    const invalidArgs3 = {a: {'key': 'v'}, b: [4], action: Action.Divide}
    expect(simpleCalculator(invalidArgs)).toBeNull()
    expect(simpleCalculator(invalidArgs2)).toBeNull()
    expect(simpleCalculator(invalidArgs3)).toBeNull()
  });
});
