/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  var matrix = [];

  var aux1 = Array(n).fill(1);
  var aux0 = Array(n).fill(0);
  aux0[0] = 1;

  matrix.push(aux1);

  for (let i = 0; i < m - 1; i++) {
    matrix.push(aux0);
  }

  for (let i = 0; i < m - 1; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i + 1][j] = matrix[i][j] + matrix[i + 1][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};

uniquePaths(3, 7);
