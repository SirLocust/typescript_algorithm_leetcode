import { describe, expect, it, test } from 'vitest';
import { numIdenticalPairs } from '../../arrays/NumberOfGoodPairs';

describe('NumberOfGoodPairs test', () => {
  test('case 1 ', () => {
    const input = [1, 2, 3, 1, 1, 3];
    const output = 4;
    const result = numIdenticalPairs(input);
    expect(output).toEqual(result);
  });
  test('case 2 ', () => {
    const input = [1, 1, 1, 1];
    const output = 6;
    const result = numIdenticalPairs(input);
    expect(output).toEqual(result);
  });
  test('case 3 ', () => {
    const input = [1, 2, 3];
    const output = 0;
    const result = numIdenticalPairs(input);
    expect(output).toEqual(result);
  });
});
