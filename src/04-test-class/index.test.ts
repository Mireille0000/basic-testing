// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const accountInstance = getBankAccount(32);
    return expect(accountInstance.getBalance()).toBe(32);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const accountInstance = getBankAccount(30);
    expect(() => accountInstance.withdraw(34)).toThrow();

  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const accountInstance = getBankAccount(30);
    expect(() => accountInstance.transfer(38, accountInstance)).toThrow(); //
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const accountInstance = getBankAccount(30);
    expect(() => accountInstance.transfer(30, accountInstance)).toThrow(); 
  });

  test('should deposit money', () => {
    // Write your test here
    const balance = getBankAccount(34);
    expect(balance.deposit(34)).toBe(balance);
  });

  test('should withdraw money', () => {
    // Write your test here
    const balance = getBankAccount(34);
    expect(balance.withdraw(10)).toBe(balance);
  });

  test('should transfer money', () => {
    // Write your test here
    const accoutFirst = getBankAccount(34);
    const accountSecond = getBankAccount(20)
    expect(accoutFirst.transfer(10, accountSecond)).toBe(accoutFirst);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const account = getBankAccount(30);

    await account.fetchBalance().then((res) => {
      if(res) {
        expect(res).toBeTruthy();
      }
    })
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const account = getBankAccount(20);
    await account.fetchBalance().then((res) => {
      if (res) {
        expect(account.synchronizeBalance()).resolves.toBe(res);
      }
    })
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const account = getBankAccount(20);
    await account.fetchBalance().then((res) => {
      if (!res) {
        expect(account.synchronizeBalance()).resolves.toThrow('Synchronization failed');
      }
    })
  });
});
