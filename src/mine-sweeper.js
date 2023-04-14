const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((item) => item.map((elem) => elem = 0));
  let minesCount = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      minesCount = 0;
      for (let i = row - 1; i < row + 2; i++) {
        for (let i2 = col - 1; i2 < col + 2; i2++) {
          if (i === row && i2 === col) continue;
          if(i === -1 || i2 === -1 || i === matrix.length || i2 === matrix[0].length) continue;
          else{
            if(matrix[i][i2]) minesCount++;
          } 
        }
      }
      result[row][col] = minesCount;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
