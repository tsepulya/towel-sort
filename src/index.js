
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined || matrix.length === 0) {
      return array;
  } else {
     for (let i = 0; i < matrix.length; i ++) {
         if (i % 2 === 0) {
              for (let j = 0; j < matrix[i].length; j++) {
               array.push(matrix[i][j]);
              }
          } else {
              for (let j = matrix[i].length; j >= 0; j--) {
                  array.push(matrix[i][j]);
              }
          }
     }
     return array.filter(a => a !== undefined);
  }
}
