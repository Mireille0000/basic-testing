// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, rejectCustomError, MyAwesomeError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    const data = await resolveValue(9);
    expect(data).toBe(9);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const testFn = () => {
      throwError("Error occurred");
    }
    expect(testFn).toThrowError("Error occurred");
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    const testFn = () => {
      throwError();
    }
    expect(testFn).toThrowError('Oops!'); //
  });
});

describe('throwCustomError', () => {
  // Write your test here
  test('should throw custom error', () => {
    const testFn = () => {
      throwCustomError()
    };
    expect(testFn).toThrowError('This is my awesome custom error!')
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    const testFn = async () => {
      await rejectCustomError();
    }
    await expect(testFn).rejects.toThrow(MyAwesomeError);
  });
});
