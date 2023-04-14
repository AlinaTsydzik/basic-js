const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i=0; i< matrix[0].length; i++) {
    sum += matrix[0][i];
  }

  for (let i=1; i < matrix.length; i++) {
    for(let i2=0; i2 < matrix[i].length; i2++){
      if(matrix[i-1][i2]!== 0) sum+=matrix[i][i2];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
