import { add, subtract, multiply, divide } from "./mathUtils";

describe(
  'Test "add" function',
  () => {
    test('Check number+number', () => {
      const result = add(2,2);
      expect(result).toBe(4);
    });
    test('Check non-number argument', () => {
      const result = add('2', 2);
      expect(result).toBe('something went wrong!');
    });
    test('Check NaN argument', () => {
      const result = add(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)

describe(
  'Test "subtract" function',
  () => {
    test('Check number-number', () => {
      const result = subtract(2,2);
      expect(result).toBe(0);
    });
    test('Check non-number argument', () => {
      const result = subtract('2', 2);
      expect(result).toBe('something went wrong!');
    });
    test('Check NaN argument', () => {
      const result = subtract(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)

describe(
  'Test "multiply" function',
  () => {
    test('Check number-number', () => {
      const result = multiply(2,5);
      expect(result).toBe(10);
    });
    test('Check non-number argument', () => {
      const result = multiply('2', 2);
      expect(result).toBe('something went wrong!');
    });
    test('Check NaN argument', () => {
      const result = multiply(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)

describe(
  'Test "divide" function',
  () => {
    test('Check number-number', () => {
      const result = divide(10,5);
      expect(result).toBe(2);
    });
    test('Check division by zero', () => {
      const result = divide(10,0);
      expect(result).toBe('cannot divide by zero!');
    });
    test('Check non-number argument', () => {
      const result = divide('2', 2);
      expect(result).toBe('something went wrong!');
    });
    test('Check NaN argument', () => {
      const result = divide(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)