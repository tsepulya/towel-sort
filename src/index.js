
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.join(',').split(',').map(a => Number(a));
}
