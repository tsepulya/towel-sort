
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined || matrix.length === 0) {
      return array;
  } else {
     for (let i = 0; i < matrix.length; i ++) {
         for (let j = 0; j < matrix[i].length; j++) {
             array.push(matrix[i][j]);
         }
     }
     return array;
  }
}
