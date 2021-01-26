/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
 
 73. Set Matrix Zeroes
Medium

2979

351

Add to List

Share
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1


 */

var setZeroes = function (matrix) {
  let index = [];
  let length = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].map((e, indx) => {
      if (e === 0) index.push([i, indx]);
    });
  }

  while (index.length) {
    let e = index.shift();

    for (let i = 0; i < length; i++) {
      matrix[e[0]][i] = 0;
    }

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][e[1]] = 0;
    }
  }
};
