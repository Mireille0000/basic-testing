// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    // continue cases for other actions   
    { a: 2, b: 1, action: Action.Subtract, expected: 1 },
    { a: 4, b: 2, action: Action.Subtract, expected: 2 },
    { a: 7, b: 3, action: Action.Subtract, expected: 4 },

    { a: 2, b: 1, action: Action.Multiply, expected: 2 },
    { a: 4, b: 2, action: Action.Multiply, expected: 8 },
    { a: 7, b: 3, action: Action.Multiply, expected: 21 },

    { a: 2, b: 2, action: Action.Divide, expected: 1 },
    { a: 4, b: 2, action: Action.Divide, expected: 2 },
    { a: 9, b: 3, action: Action.Divide, expected: 3 },

    { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
    { a: 7, b: 3, action: Action.Exponentiate, expected: 343 },

    { a: 2, b: 1, action: '*_*', expected: null },
    { a: 4, b: 2, action: '+-+', expected: null },
    { a: 7, b: 3, action: 'T_T', expected: null },

    { a: '2', b: NaN, action: Action.Multiply, expected: null },
    { a: 'Hello, World', b: [2], action: Action.Exponentiate, expected: null },
    { a: {a: 8}, b: 3, action: Action.Subtract, expected: null },

];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)
    ('returns $expected when applying $action -s on $a and $b', ({a, b, action, expected}) => {
      expect(simpleCalculator({a, b, action})).toBe(expected);
  });
  // Consider to use Jest table tests API to test all cases above
});
