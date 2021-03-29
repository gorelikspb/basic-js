const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  arr = array.slice(0);
  for (let i = 0; i<arr.length; i++){
    if (arr[i]==undefined){
      //do nothing
    }
    else if (arr[i] == '--double-next'){
      arr[i]=arr[i+1];
    }
    else if  (arr[i] == '--double-prev'){
      if (arr[i-1]){
        arr[i] = arr[i-1];
      }
    }
    else if  (arr[i] == '--discard-prev'){
      arr[i-1]=undefined;
    }
    else if  (arr[i] == '--discard-next'){
      arr[i+1]=undefined;
    }
  }

  clear = []
  for (let el of arr){
    if (typeof el == 'number'){
      clear.push(el);
    }
  }
  
  return clear;
};

