/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  var n = word1.length;
  var m = word2.length;

  var matrix = [];

  var auxM0 = Array(n + 1).fill(0);

  for (let i = 0; i < m + 1; i++) {
    matrix.push([...auxM0]);
  }

  for (let i = 0; i < n + 1; i++) {
    matrix[0][i] = i;
  }

  for (let i = 0; i < m + 1; i++) {
    matrix[i][0] = i;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[j - 1] == word2[i - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) +
          1;
      }
    }
  }

  return matrix[m][n];
};

console.log(minDistance("hourse", "rose"));
