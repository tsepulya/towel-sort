
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
      for (let k = 0; k < matrix[i].length; k++) {
          result.push(matrix[i][k]);
      }
  }
}
