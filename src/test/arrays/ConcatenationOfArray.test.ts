import { describe, it, expect } from 'vitest';
import { getConcatenation } from '../../arrays/ConcatenationOfArray';

describe('test all ', () => {
  // it('case 1 ', () => {
  //   const input = [1, 2, 1];
  //   const ouput = [1, 2, 1, 1, 2, 1];
  //   const result = getConcatenation(input);
  //   expect(ouput).toEqual(result);
  // });

  it('case 2 ', () => {
    const input = [1, 3, 2, 1];
    const ouput = [1, 3, 2, 1, 1, 3, 2, 1];
    const result = getConcatenation(input);
    expect(ouput).toEqual(result);
  });
});
