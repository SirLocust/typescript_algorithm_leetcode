export const interpret = (command: string): string => {
  let result: String[] = [];
  for (let i = 0; i < command.length; i++) {
    const element = command[i];

    if (element === 'G') {
      result.push('G');
    }
    if (element === '(' && command[i + 1] === ')') {
      result.push('o');
    }
    if (element === '(' && command[i + 1] === 'a') {
      result.push('al');
    }
  }
  return result.join('');
};
