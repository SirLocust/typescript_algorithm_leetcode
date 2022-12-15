export const numIdenticalPairs = (nums: number[]): number => {
  const lenght = nums.length;
  let result: number = 0;
  for (let i = 0; i < lenght; i++) {
    for (let j = 0; j < lenght; j++) {
      if (nums[i] === nums[j] && i < j) {
        result++;
      }
    }
  }
  return result;
};
