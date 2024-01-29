export function minChange(coins) {
    coins.sort((a, b) => a - b);

    let currentMinChange = 0;

    for (const coin of coins) {
      if (coin > currentMinChange + 1) {
        return currentMinChange + 1;
      }
      currentMinChange += coin;
    }

    return currentMinChange + 1;
}