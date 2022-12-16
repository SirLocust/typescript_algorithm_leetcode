import { describe, test, expect } from 'vitest';
import { interpret } from '../../strings/GoalParserInterpretation';

describe('GoalParserInterpretation', () => {
  test('case one ', () => {
    const input = 'G()(al)';
    const output = 'Goal';
    const result = interpret(input);
    expect(result).toEqual(output);
  });
  test('case two', () => {
    const input = 'G()()()()(al)';
    const output = 'Gooooal';
    const result = interpret(input);
    expect(result).toEqual(output);
  });
  test('case three', () => {
    const input = '(al)G(al)()()G';
    const output = 'alGalooG';
    const result = interpret(input);
    expect(result).toEqual(output);
  });
});
