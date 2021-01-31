
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
    if (matrix === undefined || matrix.length === 0) {
        return array;
    } else {
       return matrix.join(',').split(',').map(a => Number(a));
    }
}
