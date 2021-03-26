const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
  n = 0;
  for (let row of matrix) {
    for (let entry of row){
      if (entry == '^^'){n+=1;}
      }
    }
  return n;
  
};


