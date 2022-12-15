export const getConcatenation = (nums: number[]): number[] => {
  const result = [];
  let count = 0;
  for (let i = 0; i < nums.length * 2; i++) {
    result[i] = nums[count];
    if (count == nums.length - 1) {
      count = -1;
    }
    count++;
  }
  return result;
};
