export function findPairWithSum(numbers, sumNumber) {
    const numSet = new Set();

    for (const num of numbers) {
      const complement = sumNumber - num;
      if (numSet.has(complement)) {
        return [complement, num];
      }
      numSet.add(num);
    }

    return [];
}