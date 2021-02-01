/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  catalan = [];

  const x = 1;

  catalan[0] = catalan[1] = x;

  for (let i = 2; i <= n; i++) {
    catalan[i] = 0;
    for (let j = 0; j < i; j++) {
      catalan[i] += catalan[j] * catalan[i - j - 1];
    }
  }

  return catalan[n];
};
