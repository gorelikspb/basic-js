const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (15<sampleActivity|| sampleActivity<=0 || !(typeof sampleActivity == 'string')){return false;}
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here

  d = (Math.log2(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD);
  return Math.ceil(d) || false;
};
