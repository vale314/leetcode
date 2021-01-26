/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
 

Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

*/

const swap = function (matrix, i, j, k, l) {
  const temp = matrix[k][l];
  matrix[k][l] = matrix[i][j];
  matrix[i][j] = temp;
};

var rotate = (matrix) => {
  let lo = 0;
  let hi = matrix.length - 1;

  while (lo < hi) {
    const length = hi - lo;

    for (let i = 0; i < length; i++) {
      const index = lo + i;
      swap(matrix, lo + i, hi, lo, index);
      console.log("prim");
      console.log(lo + i, hi, lo, index);

      swap(matrix, hi, hi - i, lo, index);
      console.log("seg");
      console.log(hi, hi - i, lo, index);

      swap(matrix, hi - i, lo, lo, index);
      console.log("ter");
      console.log(hi - i, lo, lo, index);

      console.log("\n");
    }
    console.log("\n\n");
    lo++;
    hi--;
  }
  return matrix;
};

console.log([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
var result = rotate([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
/*console.log(result);*/

/*
var rotate = function(matrix) {
    
    /*
    let matrixR = [];
    let aux = [];
    
    for(let j=0; j < matrix.length; j++){
        for(let i = 0; i < matrix.length; i++){
            aux.unshift(matrix[i][j]);
        }
        matrixR.push(aux);
        aux=[];
    }
   return matrixR;
   */

/*
    let matrixR = [];
    let aux = [];
    
    for(let j=0; j < matrix.length; j++){
        for(let i = 0; i < matrix.length; i++){
            aux.unshift(matrix[i][j]);
        }
        matrixR.push(aux);
        aux=[];
    }
    
    for(let j=0; j < matrix.length; j++){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][j] = matrixR[i][j];
        }
    }
    
};
*/
